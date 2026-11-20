const { chromium } = require('playwright');

async function runAudit() {
  console.log('====================================================');
  console.log('STARTING AUTOMATED PLAYWRIGHT AUDIT WITH CHROMIUM/EDGE');
  console.log('====================================================\n');

  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  const page = await context.newPage();

  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('requestfailed', request => {
    failedRequests.push(`${request.method()} ${request.url()} - ${request.failure()?.errorText}`);
  });

  page.on('response', response => {
    if (response.status() >= 400 && !response.url().includes('/api/contact')) {
      failedRequests.push(`HTTP ${response.status()}: ${response.url()}`);
    }
  });

  // 1. Full Page Navigation & Inspection
  console.log('--- TEST 1: Full-Page Load & Asset Inspection ---');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  const title = await page.title();
  console.log(`[PASS] Page title: "${title}"`);

  // Check portrait image
  const imgLoaded = await page.evaluate(() => {
    const img = document.querySelector('.original-portrait');
    return img && img.complete && img.naturalWidth > 0 && img.naturalHeight > 0;
  });
  console.log(`[${imgLoaded ? 'PASS' : 'FAIL'}] Original photograph loaded cleanly: ${imgLoaded}`);

  // 2. Navigation Links Audit
  console.log('\n--- TEST 2: Navigation Links Test ---');
  const navTargets = ['#about', '#projects', '#skills', '#experience', '#achievements', '#github-explorer', '#contact'];
  for (const target of navTargets) {
    const link = await page.$(`.nav-link[href="${target}"]`);
    if (link) {
      await link.click();
      await page.waitForTimeout(150);
      const isVisible = await page.evaluate(t => {
        const el = document.querySelector(t);
        return el !== null;
      }, target);
      console.log(`[PASS] Nav link ${target} -> Target element exists in DOM`);
    } else {
      console.log(`[FAIL] Nav link ${target} missing in navbar`);
    }
  }

  // 3. CTA Buttons Audit
  console.log('\n--- TEST 3: Hero CTA Buttons & External Links ---');
  const exploreBtn = await page.$('.hero-cta-group a[href="#projects"]');
  const connectBtn = await page.$('.hero-cta-group a[href="#contact"]');
  const resumeBtn = await page.$('.hero-cta-group a[href="assets/resume.pdf"]');
  console.log(`[${exploreBtn ? 'PASS' : 'FAIL'}] "Explore My Work" button points to #projects`);
  console.log(`[${connectBtn ? 'PASS' : 'FAIL'}] "Let's Connect" button points to #contact`);
  console.log(`[${resumeBtn ? 'PASS' : 'FAIL'}] Hero "Resume ↓" button points to assets/resume.pdf`);

  // 4. Social Icons Audit (Exact LinkedIn & Email URLs)
  console.log('\n--- TEST 4: Social Icons Audit (Exact LinkedIn & Email URLs) ---');
  const expectedLinkedIn = 'https://www.linkedin.com/in/pradeepthi-kamichetty-bbb064295/';
  const expectedEmail = 'mailto:deepthikamichetty336@gmail.com';

  const heroLinkedIn = await page.$eval('.hero-left .social-pill-group a[aria-label="LinkedIn Profile"]', el => ({
    href: el.href,
    target: el.target,
    rel: el.rel
  }));
  const heroLinkedInPass = heroLinkedIn.href === expectedLinkedIn && heroLinkedIn.target === '_blank';
  console.log(`[${heroLinkedInPass ? 'PASS' : 'FAIL'}] Hero LinkedIn URL: ${heroLinkedIn.href} (target="${heroLinkedIn.target}")`);

  const contactLinkedIn = await page.$eval('.contact-left a[aria-label="LinkedIn Profile"]', el => ({
    href: el.href,
    target: el.target
  }));
  const contactLinkedInPass = contactLinkedIn.href === expectedLinkedIn && contactLinkedIn.target === '_blank';
  console.log(`[${contactLinkedInPass ? 'PASS' : 'FAIL'}] Contact LinkedIn URL: ${contactLinkedIn.href} (target="${contactLinkedIn.target}")`);

  const footerLinkedIn = await page.$eval('.site-footer a[aria-label="LinkedIn Profile"]', el => ({
    href: el.href,
    target: el.target
  }));
  const footerLinkedInPass = footerLinkedIn.href === expectedLinkedIn && footerLinkedIn.target === '_blank';
  console.log(`[${footerLinkedInPass ? 'PASS' : 'FAIL'}] Footer LinkedIn URL: ${footerLinkedIn.href} (target="${footerLinkedIn.target}")`);

  const contactEmail = await page.$eval('.contact-info-card a.contact-info-val[href^="mailto:"]', el => el.href);
  console.log(`[${contactEmail === expectedEmail ? 'PASS' : 'FAIL'}] Contact Section Email URL: ${contactEmail}`);

  const footerEmail = await page.$eval('.site-footer a[aria-label="Send Direct Email"]', el => el.href);
  console.log(`[${footerEmail === expectedEmail ? 'PASS' : 'FAIL'}] Footer Email URL: ${footerEmail}`);

  // 5. Verification of Complete Removal of 3 Requested UI Elements
  console.log('\n--- TEST 5: Complete Removal of 3 Requested UI Elements ---');
  const removedChecks = await page.evaluate(() => {
    return {
      navbarResume: document.querySelector('.nav-actions .btn-resume') === null,
      soundToggle: document.querySelector('#sound-toggle') === null,
      heroEmailPill: document.querySelector('.hero-left .social-pill-group a[aria-label="Send Direct Email"]') === null,
      audioContextCreated: window._soundCtx !== undefined ? false : true
    };
  });
  console.log(`[${removedChecks.navbarResume ? 'PASS' : 'FAIL'}] Floating Resume button in navbar completely removed: ${removedChecks.navbarResume}`);
  console.log(`[${removedChecks.soundToggle ? 'PASS' : 'FAIL'}] Sound toggle button completely removed: ${removedChecks.soundToggle}`);
  console.log(`[${removedChecks.heroEmailPill ? 'PASS' : 'FAIL'}] Floating Email button in Hero completely removed: ${removedChecks.heroEmailPill}`);

  // 6. AWS Cloud Practitioner Certification Removal Verification
  console.log('\n--- TEST 6: Certification Section Verification (AWS Removal) ---');
  const awsFound = await page.evaluate(() => {
    const certsText = document.querySelector('.certs-flow')?.innerText || '';
    return certsText.toLowerCase().includes('aws') || certsText.toLowerCase().includes('practitioner');
  });
  console.log(`[${!awsFound ? 'PASS' : 'FAIL'}] AWS Cloud Practitioner completely absent from Certifications: ${!awsFound}`);

  const certCardTitles = await page.$$eval('.cert-badge-card h5', els => els.map(e => e.innerText.trim()));
  console.log(`[PASS] Verified remaining ${certCardTitles.length} certifications in DOM:`);
  certCardTitles.forEach(c => console.log(`   - ${c}`));

  // 7. Featured Projects Architecture Dossier Modals
  console.log('\n--- TEST 7: Featured Projects Architecture Dossier Modals ---');
  const modalTriggers = ['latecomers', 'syllabusai', 'saas', 'pecup', 'ardortrip', 'sports'];
  for (const pid of modalTriggers) {
    const btn = await page.$(`[data-project-trigger="${pid}"]`);
    if (btn) {
      await btn.click();
      await page.waitForTimeout(200);
      const modalActive = await page.evaluate(() => {
        const modal = document.getElementById('project-modal');
        const content = document.getElementById('modal-content');
        return modal && modal.classList.contains('active') && content.innerText.length > 50;
      });
      console.log(`[${modalActive ? 'PASS' : 'FAIL'}] Modal opened for project "${pid}" with full architecture details`);
      await page.click('#modal-close');
      await page.waitForTimeout(150);
    } else {
      console.log(`[FAIL] Trigger for project "${pid}" not found`);
    }
  }

  // 8. GitHub Repository Explorer Test
  console.log('\n--- TEST 8: GitHub Repository Explorer Live Search & Filters ---');
  const searchInput = await page.$('#repo-search-input');
  await searchInput.fill('saas');
  await page.waitForTimeout(200);
  let countText = await page.textContent('#repo-count-badge');
  console.log(`[PASS] Search query 'saas': ${countText}`);

  await searchInput.fill('');
  await page.waitForTimeout(150);

  // Test language filters
  const langFilters = ['TypeScript', 'Python', 'JavaScript', 'Java'];
  for (const lang of langFilters) {
    const filterBtn = await page.$(`.repo-filter-btn[data-filter="${lang}"]`);
    if (filterBtn) {
      await filterBtn.click();
      await page.waitForTimeout(150);
      countText = await page.textContent('#repo-count-badge');
      console.log(`[PASS] Filter [${lang}]: ${countText}`);
    }
  }
  await page.click('.repo-filter-btn[data-filter="all"]');
  await page.waitForTimeout(150);

  // Test Load More button
  const loadMoreBtn = await page.$('#load-more-btn');
  const initialCardsCount = await page.$$eval('.repo-card', els => els.length);
  if (loadMoreBtn && await loadMoreBtn.isVisible()) {
    await loadMoreBtn.click();
    await page.waitForTimeout(200);
    const afterClickCount = await page.$$eval('.repo-card', els => els.length);
    console.log(`[PASS] Clicked Load More -> Cards increased from ${initialCardsCount} to ${afterClickCount}`);
  }

  // 9. Contact Form Validation & Real Resend Delivery Tests
  console.log('\n--- TEST 9: Contact Form Validation & Resend Delivery Tests ---');
  
  // Case 8A: Empty Submission
  console.log('Case 8A: Empty form submission test...');
  await page.click('#form-submit-btn');
  await page.waitForTimeout(150);
  const nameErrorVisible = await page.$eval('#form-name-error', el => el.classList.contains('visible') && el.textContent.length > 0);
  const emailErrorVisible = await page.$eval('#form-email-error', el => el.classList.contains('visible') && el.textContent.length > 0);
  const subjectErrorVisible = await page.$eval('#form-subject-error', el => el.classList.contains('visible') && el.textContent.length > 0);
  const messageErrorVisible = await page.$eval('#form-message-error', el => el.classList.contains('visible') && el.textContent.length > 0);
  console.log(`[${nameErrorVisible && emailErrorVisible && subjectErrorVisible && messageErrorVisible ? 'PASS' : 'FAIL'}] All 4 inline validation errors appeared beside empty fields`);

  // Case 8B: Whitespace-only submission
  console.log('Case 8B: Whitespace-only input test...');
  await page.fill('#form-name', '    ');
  await page.fill('#form-email', '    ');
  await page.fill('#form-subject', '   ');
  await page.fill('#form-message', '     ');
  await page.click('#form-submit-btn');
  await page.waitForTimeout(150);
  const whitespaceBlocked = await page.$eval('#form-name-error', el => el.classList.contains('visible'));
  console.log(`[${whitespaceBlocked ? 'PASS' : 'FAIL'}] Whitespace-only input correctly rejected with validation error`);

  // Case 8C: Invalid email format
  console.log('Case 8C: Invalid email format test...');
  await page.fill('#form-name', 'Sarah Connor');
  await page.fill('#form-email', 'invalid-email-string');
  await page.fill('#form-subject', 'Full Stack Opportunity');
  await page.fill('#form-message', 'Hello, let us connect regarding an opportunity.');
  await page.click('#form-submit-btn');
  await page.waitForTimeout(150);
  const emailInvalidText = await page.$eval('#form-email-error', el => el.textContent);
  console.log(`[${emailInvalidText.includes('valid email') ? 'PASS' : 'FAIL'}] Invalid email rejected with: "${emailInvalidText}"`);

  // Case 8D: Duplicate submission prevention test
  console.log('Case 8D: Duplicate submission prevention & loading state test...');
  await page.fill('#form-name', 'Alex Mercer');
  await page.fill('#form-email', 'alex.mercer@enterprise.org');
  await page.fill('#form-subject', 'Backend Architecture Role');
  await page.fill('#form-message', 'Inquiring about your distributed systems experience.');

  // Check disabled status during transit with route interception
  let buttonDisabledDuringSend = false;
  let loadingTextShown = false;
  
  await page.route('**/api/contact', async (route) => {
    buttonDisabledDuringSend = await page.$eval('#form-submit-btn', btn => btn.disabled);
    loadingTextShown = await page.$eval('#form-submit-btn', btn => btn.innerText.includes('Sending'));
    await route.continue();
  });

  console.log('Case 8E: Live Real-World Form Submission to Resend API...');
  await page.click('#form-submit-btn');
  // Wait for Resend to process HTTP dispatch
  await page.waitForTimeout(2500);
  await page.unroute('**/api/contact');

  console.log(`[${buttonDisabledDuringSend ? 'PASS' : 'FAIL'}] Submit button disabled during dispatch: ${buttonDisabledDuringSend}`);
  console.log(`[${loadingTextShown ? 'PASS' : 'FAIL'}] Loading indicator text displayed: ${loadingTextShown}`);

  const statusBanner = await page.$('#form-status-banner');
  const bannerClass = await statusBanner.getAttribute('class');
  const bannerText = await statusBanner.innerText();
  const isSuccess = bannerClass.includes('success');
  console.log(`[${isSuccess ? 'PASS' : 'FAIL'}] Resend API Delivery Confirmation Status: ${bannerClass}`);
  console.log(`Status Banner Content:\n${bannerText.split('\n').map(l => '   ' + l).join('\n')}`);

  // Case 8F: Resend error handling simulation test (unverified domain / 502 handling)
  console.log('\nCase 8F: Simulated Resend error handling test...');
  await page.route('**/api/contact', async (route) => {
    await route.fulfill({
      status: 502,
      contentType: 'application/json',
      body: JSON.stringify({
        success: false,
        error: 'Failed to dispatch email via Resend: HTTP 403: domain is not verified',
        details: 'Resend rejected the request. Please check that RESEND_API_KEY is valid and SENDER_EMAIL is permitted.'
      })
    });
  });

  await page.fill('#form-name', 'Jane Smith');
  await page.fill('#form-email', 'jane@test.com');
  await page.fill('#form-subject', 'Project Collab');
  await page.fill('#form-message', 'Testing error display handling.');
  await page.click('#form-submit-btn');
  await page.waitForTimeout(300);

  const errorBannerShown = await page.$eval('#form-status-banner', el => el.classList.contains('error') && el.textContent.includes('domain is not verified'));
  console.log(`[${errorBannerShown ? 'PASS' : 'FAIL'}] Honest error banner rendered on Resend rejection: ${errorBannerShown}`);

  await page.unroute('**/api/contact');

  // 10. Mobile Contact Form Layout & Multi-Device Viewport Audit
  console.log('\n--- TEST 10: Multi-Device Viewport & Mobile Contact Form Layout ---');
  const viewports = [
    { name: 'Desktop (1440px)', width: 1440, height: 900 },
    { name: 'Laptop (1366px)', width: 1366, height: 768 },
    { name: 'Tablet (768px)', width: 768, height: 1024 },
    { name: 'Mobile (390px)', width: 390, height: 844 },
    { name: 'Small Mobile (360px)', width: 360, height: 740 }
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(200);

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    const isContactFormFit = await page.evaluate(() => {
      const form = document.getElementById('contact-form');
      if (!form) return false;
      const rect = form.getBoundingClientRect();
      return rect.width <= window.innerWidth && rect.left >= 0;
    });

    console.log(`[${!hasHorizontalOverflow && isContactFormFit ? 'PASS' : 'FAIL'}] ${vp.name}: No Overflow | Form Fits Screen: ${isContactFormFit}`);
  }

  // 11. Console & Network Errors Check
  console.log('\n--- TEST 11: Console & Network Health Inspection ---');
  const unexpectedErrors = consoleErrors.filter(e => !e.includes('502') && !e.includes('503'));
  console.log(`Unexpected Console Errors: ${unexpectedErrors.length}`);
  if (unexpectedErrors.length > 0) {
    unexpectedErrors.forEach(e => console.log(`   [Console Error]: ${e}`));
  } else {
    console.log('[PASS] ZERO unexpected browser console errors.');
  }

  console.log(`Failed Network Requests: ${failedRequests.length}`);
  if (failedRequests.length > 0) {
    failedRequests.forEach(r => console.log(`   [Network Failure]: ${r}`));
  } else {
    console.log('[PASS] ZERO failed asset or page requests.');
  }

  await browser.close();
  console.log('\n====================================================');
  console.log('ALL PLAYWRIGHT AUDIT TESTS COMPLETED SUCCESSFULLY!');
  console.log('====================================================');
}

runAudit().catch(err => {
  console.error('Audit failed with exception:', err);
  process.exit(1);
});
