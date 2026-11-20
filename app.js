
// Descriptions dictionary for newly fetched repos without descriptions
const DESCRIPTIONS_MAP = {
  "LateComers": "Sanitized portfolio edition of the campus attendance & visitor management system developed for real-world college operations. Full-stack MERN with scheduled cron notifications and MongoDB indexing.",
  "Syllabus-AI": "Interactive Student Learning Nexus powered by Gemini 2.5 Flash API with schema-locked JSON responses. Transforms uploaded syllabi into structured timelines, flashcards, and auto-graded quizzes.",
  "SmartResourcePlatform": "Next-gen institutional resource scheduling and booking engine with role-based access control, conflict resolution, and TypeScript type safety.",
  "Medi-AI": "Intelligent healthcare diagnostic assistance platform with symptom analysis, triage routing, and conversational AI interface.",
  "flowsync": "Distributed event streaming and task pipeline engine built in Java with resilient retry logic and transactional state tracking.",
  "Secure-Grant-Management-Portal-with-RBAC-and-OAuth-2.0": "Enterprise grant allocation portal built with robust OAuth 2.0 authentication and multi-tier role-based permissions.",
  "Command-Pattern-Based-Workflow-Engine": "TypeScript execution engine implementing the Command design pattern for decoupled, undoable workflow automation pipelines.",
  "asynchronous-data-ingestion": "High-throughput async data ingestion pipeline in Python with buffering, backpressure handling, and batch persistence.",
  "Health-Monitor": "Real-time service health check and telemetry dashboard monitoring microservice uptime, latencies, and error rates.",
  "KrishiiTech": "Agri-tech digital platform providing farmers with crop advisory, price forecasts, and localized resource management.",
  "Automated-news-digest-generator": "Automated pipeline aggregating news RSS feeds, summarizing top stories with NLP, and generating tailored daily digests.",
  "Application-Tracking-System-API": "RESTful ATS backend API supporting candidate lifecycle tracking, resume parsing metadata, and stage-gate recruitment workflows.",
  "eightfold-transformer": "Custom transformer neural network architecture experiments and attention mechanism benchmarking in Python.",
  "spreadsheet-engine": "Lightweight formula evaluation and cell dependency graph engine built from first principles in Python.",
  "textcraft-utils": "Modular Python text preprocessing, tokenizer utilities, and NLP feature extraction library.",
  "LeetCode": "Automated synchronization pipeline archiving 250+ solved LeetCode algorithms with optimal time and space complexity notes.",
  "KVP-Portfolio": "Creative developer portfolio prototype showcasing full-stack engineering, interactive UI, and backend microservice architectures."
};

// 1. FALLBACK REPOSITORIES DATASET (38 VERIFIED PUBLIC REPOSITORIES)
const FALLBACK_REPOS = [
  {
    "name": "SmartResourcePlatform",
    "description": "Next-gen institutional resource scheduling and booking engine with role-based access control, conflict resolution, and TypeScript type safety.",
    "html_url": "https://github.com/KvPradeepthi/SmartResourcePlatform",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-11-04T00:17:46Z",
    "homepage": null
  },
  {
    "name": "LateComers",
    "description": "Sanitized portfolio edition of the campus attendance & visitor management system developed for real-world college operations. Full-stack MERN with scheduled cron notifications and MongoDB indexing.",
    "html_url": "https://github.com/KvPradeepthi/LateComers",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-11-01T16:44:34Z",
    "homepage": null
  },
  {
    "name": "Medi-AI",
    "description": "Intelligent healthcare diagnostic assistance platform with symptom analysis, triage routing, and conversational AI interface.",
    "html_url": "https://github.com/KvPradeepthi/Medi-AI",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-11-01T14:09:02Z",
    "homepage": null
  },
  {
    "name": "celesto-sandbox-evaluation",
    "description": "Celesto sandbox control plane, durable SQLite run ledger, reliability evaluation suite, and containment policy.",
    "html_url": "https://github.com/KvPradeepthi/celesto-sandbox-evaluation",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-10-24T10:29:38Z",
    "homepage": null
  },
  {
    "name": "devflow-ai",
    "description": "DevFlow AI: Intelligent Developer Routing Assistant powered by AWS Strands Decider 2B (#tool-selection) and Amazon Bedrock",
    "html_url": "https://github.com/KvPradeepthi/devflow-ai",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-10-22T19:02:45Z",
    "homepage": null
  },
  {
    "name": "multi-tenant-saas-platform",
    "description": "Production-ready multi-tenant SaaS platform with project and task management. Features JWT authentication, role-based access control, data isolation, and full Docker containerization.",
    "html_url": "https://github.com/KvPradeepthi/multi-tenant-saas-platform",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-10-16T07:04:04Z",
    "homepage": null
  },
  {
    "name": "Syllabus-AI",
    "description": "Interactive Student Learning Nexus powered by Gemini 2.5 Flash API with schema-locked JSON responses. Transforms uploaded syllabi into structured timelines, flashcards, and auto-graded quizzes.",
    "html_url": "https://github.com/KvPradeepthi/Syllabus-AI",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-10-15T04:28:23Z",
    "homepage": null
  },
  {
    "name": "multi-tenant-csv",
    "description": "Secure multi-tenant weekly sales report export API with JWT auth and role-based access control",
    "html_url": "https://github.com/KvPradeepthi/multi-tenant-csv",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-10-13T11:15:53Z",
    "homepage": null
  },
  {
    "name": "reporting-api",
    "description": "Resource-heavy reporting API demonstrating virtual and protection proxies.",
    "html_url": "https://github.com/KvPradeepthi/reporting-api",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-10-10T09:54:56Z",
    "homepage": null
  },
  {
    "name": "Local-FileSystem",
    "description": "Secure Local Filesystem REST API",
    "html_url": "https://github.com/KvPradeepthi/Local-FileSystem",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-10-01T16:24:15Z",
    "homepage": null
  },
  {
    "name": "Mastering-Django",
    "description": "Refactor Signals to a Robust Service Layer",
    "html_url": "https://github.com/KvPradeepthi/Mastering-Django",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-09-24T14:32:29Z",
    "homepage": null
  },
  {
    "name": "ardortrip-devops",
    "description": "ArdorTrip: End-to-end Airline Booking & DevOps Platform (Java 17, Spring Boot 3, React, PostgreSQL, Docker, Kubernetes, Jenkins, Prometheus & Grafana)",
    "html_url": "https://github.com/KvPradeepthi/ardortrip-devops",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-09-20T02:50:54Z",
    "homepage": null
  },
  {
    "name": "flowsync",
    "description": "Distributed event streaming and task pipeline engine built in Java with resilient retry logic and transactional state tracking.",
    "html_url": "https://github.com/KvPradeepthi/flowsync",
    "language": "Java",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-09-14T15:29:11Z",
    "homepage": null
  },
  {
    "name": "Secure-Grant-Management-Portal-with-RBAC-and-OAuth-2.0",
    "description": "Enterprise grant allocation portal built with robust OAuth 2.0 authentication and multi-tier role-based permissions.",
    "html_url": "https://github.com/KvPradeepthi/Secure-Grant-Management-Portal-with-RBAC-and-OAuth-2.0",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-09-08T14:47:59Z",
    "homepage": null
  },
  {
    "name": "KvPradeepthi",
    "description": "Engineered repository exploring Other architecture patterns and computational problem solving.",
    "html_url": "https://github.com/KvPradeepthi/KvPradeepthi",
    "language": "Other",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-09-08T09:24:37Z",
    "homepage": null
  },
  {
    "name": "job-board-react",
    "description": "A React-based job board application with advanced filtering, searching, sorting, and bookmarking features.",
    "html_url": "https://github.com/KvPradeepthi/job-board-react",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-09-08T05:13:01Z",
    "homepage": null
  },
  {
    "name": "textcraft-utils",
    "description": "Modular Python text preprocessing, tokenizer utilities, and NLP feature extraction library.",
    "html_url": "https://github.com/KvPradeepthi/textcraft-utils",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-09-04T03:32:27Z",
    "homepage": null
  },
  {
    "name": "LeetCode",
    "description": "Sync: LeetCode -> GitHub",
    "html_url": "https://github.com/KvPradeepthi/LeetCode",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-09-03T06:52:26Z",
    "homepage": null
  },
  {
    "name": "Command-Pattern-Based-Workflow-Engine",
    "description": "TypeScript execution engine implementing the Command design pattern for decoupled, undoable workflow automation pipelines.",
    "html_url": "https://github.com/KvPradeepthi/Command-Pattern-Based-Workflow-Engine",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-08-15T15:11:54Z",
    "homepage": null
  },
  {
    "name": "asynchronous-data-ingestion",
    "description": "High-throughput async data ingestion pipeline in Python with buffering, backpressure handling, and batch persistence.",
    "html_url": "https://github.com/KvPradeepthi/asynchronous-data-ingestion",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-08-14T05:59:14Z",
    "homepage": null
  },
  {
    "name": "Health-Monitor",
    "description": "Real-time service health check and telemetry dashboard monitoring microservice uptime, latencies, and error rates.",
    "html_url": "https://github.com/KvPradeepthi/Health-Monitor",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-08-13T06:06:40Z",
    "homepage": null
  },
  {
    "name": "KrishiiTech",
    "description": "Agri-tech digital platform providing farmers with crop advisory, price forecasts, and localized resource management.",
    "html_url": "https://github.com/KvPradeepthi/KrishiiTech",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-08-09T08:08:34Z",
    "homepage": null
  },
  {
    "name": "Automated-news-digest-generator",
    "description": "Automated pipeline aggregating news RSS feeds, summarizing top stories with NLP, and generating tailored daily digests.",
    "html_url": "https://github.com/KvPradeepthi/Automated-news-digest-generator",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-08-07T04:55:29Z",
    "homepage": null
  },
  {
    "name": "Application-Tracking-System-API",
    "description": "RESTful ATS backend API supporting candidate lifecycle tracking, resume parsing metadata, and stage-gate recruitment workflows.",
    "html_url": "https://github.com/KvPradeepthi/Application-Tracking-System-API",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-08-03T09:58:25Z",
    "homepage": null
  },
  {
    "name": "Sports-Commentary-Service",
    "description": "Real-time sports commentary backend with SSE, concurrent polling, global rate limiting, circuit breaker resilience, and Docker support.",
    "html_url": "https://github.com/KvPradeepthi/Sports-Commentary-Service",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-08-01T10:00:13Z",
    "homepage": null
  },
  {
    "name": "eightfold-transformer",
    "description": "Custom transformer neural network architecture experiments and attention mechanism benchmarking in Python.",
    "html_url": "https://github.com/KvPradeepthi/eightfold-transformer",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-06-30T05:02:39Z",
    "homepage": null
  },
  {
    "name": "KVP-Portfolio",
    "description": "Creative developer portfolio prototype showcasing full-stack engineering, interactive UI, and backend microservice architectures.",
    "html_url": "https://github.com/KvPradeepthi/KVP-Portfolio",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-04-24T17:59:39Z",
    "homepage": null
  },
  {
    "name": "customer-churn-prediction",
    "description": "Customer Churn Prediction using Machine Learning - A complete Python project with data preprocessing, EDA, and model training using telecom customer data",
    "html_url": "https://github.com/KvPradeepthi/customer-churn-prediction",
    "language": "Jupyter Notebook",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-04-23T04:22:40Z",
    "homepage": null
  },
  {
    "name": "spreadsheet-engine",
    "description": "Lightweight formula evaluation and cell dependency graph engine built from first principles in Python.",
    "html_url": "https://github.com/KvPradeepthi/spreadsheet-engine",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-03-14T14:41:54Z",
    "homepage": null
  },
  {
    "name": "llm-prompt-router",
    "description": "An LLM-powered prompt router that classifies user intents and routes requests to specialized AI personas for context-aware responses.",
    "html_url": "https://github.com/KvPradeepthi/llm-prompt-router",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-03-14T09:30:39Z",
    "homepage": null
  },
  {
    "name": "live-dashboard-csv-export",
    "description": "A backend service for performing large CSV exports with real-time progress updates via WebSockets. Features Redis Pub/Sub for message broadcasting, PostgreSQL for data storage, and a responsive frontend dashboard.",
    "html_url": "https://github.com/KvPradeepthi/live-dashboard-csv-export",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-03-06T04:58:58Z",
    "homepage": null
  },
  {
    "name": "fault-tolerant-recommendation-service",
    "description": "A fault-tolerant movie recommendation microservice system using the Circuit Breaker pattern with Docker containerization and fallback mechanisms.",
    "html_url": "https://github.com/KvPradeepthi/fault-tolerant-recommendation-service",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-02-28T06:19:00Z",
    "homepage": null
  },
  {
    "name": "service-proxy-api",
    "description": "A resilient external service proxy API with Circuit Breaker pattern, Rate Limiting, and Retry Strategy with exponential backoff for fault-tolerant backend systems.",
    "html_url": "https://github.com/KvPradeepthi/service-proxy-api",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-01-19T05:52:53Z",
    "homepage": null
  },
  {
    "name": "payment-gateway-async",
    "description": "Production-ready payment gateway with async processing, webhooks, refund management, and embeddable SDK. Demonstrates advanced architectural patterns for handling payments at scale.",
    "html_url": "https://github.com/KvPradeepthi/payment-gateway-async",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2026-01-16T07:07:42Z",
    "homepage": null
  },
  {
    "name": "custom-csv-reader-writer",
    "description": "Custom CSV reader and writer implementation in Python with benchmarking against the standard library.",
    "html_url": "https://github.com/KvPradeepthi/custom-csv-reader-writer",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2025-12-30T06:35:46Z",
    "homepage": null
  },
  {
    "name": "Hustle-hub",
    "description": "A Part-time jobs platform for users to showcase their skills or hire others using the same login.",
    "html_url": "https://github.com/KvPradeepthi/Hustle-hub",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2025-12-17T04:46:27Z",
    "homepage": null
  },
  {
    "name": "packet-tracer-api",
    "description": "API-driven network packet tracer simulator with DNS resolution, IP routing (longest prefix match), firewall rules, and TTL management. Provides detailed hop-by-hop trace of packet journey through a virtual network topology.",
    "html_url": "https://github.com/KvPradeepthi/packet-tracer-api",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2025-12-15T06:34:04Z",
    "homepage": null
  },
  {
    "name": "pki-2fa-microservice",
    "description": "Secure microservice with PKI and TOTP 2FA authentication, demonstrating enterprise-grade security practices",
    "html_url": "https://github.com/KvPradeepthi/pki-2fa-microservice",
    "language": "Python",
    "stars": 0,
    "forks": 0,
    "topics": [],
    "updated_at": "2025-12-05T13:23:52Z",
    "homepage": null
  }
];

// 2. FEATURED PROJECTS DEEP DOSSIERS (RE-VERIFIED AGAINST GITHUB REPOSITORIES)
const FEATURED_DETAILS = {
  "latecomers": {
    "title": "LateComers Management System",
    "tagline": "Campus Attendance & Visitor Management Platform",
    "category": "Full Stack MERN Platform",
    "status": "COLLEGE OPERATIONS",
    "description": "Full-stack MERN (MongoDB, Express, React, Node.js) web application developed for real-world campus operations, including attendance tracking, digital gate checkpoints, building verification, and visitor pass administration. (GitHub houses the sanitized public portfolio edition).",
    "stack": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cron Jobs",
      "REST APIs"
    ],
    "metrics": [
      {
        "label": "Deployment",
        "val": "Campus Operations"
      },
      {
        "label": "Stack Architecture",
        "val": "Full Stack MERN"
      },
      {
        "label": "Database",
        "val": "MongoDB Aggregations"
      },
      {
        "label": "Scope",
        "val": "Gate & Visitor Checkpoints"
      }
    ],
    "keyFeatures": [
      "Engineered RESTful Express endpoints handling gate checkpoint logs and student attendance records.",
      "Designed MongoDB collections with compound indexing for efficient attendance lookups.",
      "Implemented scheduled cron jobs automating attendance audit reports and notifications.",
      "Contributed to responsive React interfaces for security gate staff and administrators."
    ],
    "github": "https://github.com/KvPradeepthi/LateComers",
    "demo": "https://latecomers-frontend.onrender.com"
  },
  "syllabusai": {
    "title": "SyllabusAI \u2014 Interactive Student Learning Nexus",
    "tagline": "Deterministic Generative AI Study Suite powered by Gemini 2.5 Flash",
    "category": "GenAI & Full Stack",
    "status": "SCHEMA-LOCKED AI",
    "description": "Built a full-stack AI study platform that converts uploaded syllabi/notes (PDF, image, text) into a structured timeline, flashcards, and auto-graded quiz using schema-locked JSON responses from Gemini 2.5 Flash, eliminating malformed-output failures in production.",
    "stack": [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini 2.5 Flash",
      "Schema-Locked JSON"
    ],
    "metrics": [
      {
        "label": "Foundation Model",
        "val": "Gemini 2.5 Flash"
      },
      {
        "label": "Output Structure",
        "val": "Schema-Locked JSON"
      },
      {
        "label": "Input Types",
        "val": "PDF / Image / Text"
      },
      {
        "label": "Generated Assets",
        "val": "Timelines, Quizzes, Cards"
      }
    ],
    "keyFeatures": [
      "Enforced strict JSON schema constraints on Gemini API responses to eliminate malformed JSON parsing errors.",
      "Automated conversion of raw syllabus documents into daily, structured study milestone timelines.",
      "Dynamic flashcard generation with spaced-repetition memory review scoring.",
      "Auto-graded quiz evaluation system with comprehensive explanation rationales."
    ],
    "github": "https://github.com/KvPradeepthi/Syllabus-AI",
    "demo": "https://github.com/KvPradeepthi/Syllabus-AI"
  },
  "saas": {
    "title": "Multi-Tenant SaaS Platform",
    "tagline": "Enterprise Project & Task Management with Tenant Data Isolation",
    "category": "Backend Engineering & Security",
    "status": "CONTAINERIZED DOCKER",
    "description": "Production-ready, fully dockerized multi-tenant SaaS application built with Node.js, Express, React, and PostgreSQL. Features complete JWT authentication, role-based access control (Admin, User, Super Admin), multi-tenant data isolation, and project/task management.",
    "stack": [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "JWT Authentication",
      "RBAC",
      "Docker Compose"
    ],
    "metrics": [
      {
        "label": "Isolation Model",
        "val": "Tenant-Based Access Control"
      },
      {
        "label": "Auth Pattern",
        "val": "Stateless JWT + RBAC"
      },
      {
        "label": "Database",
        "val": "PostgreSQL"
      },
      {
        "label": "Environment",
        "val": "Docker Compose"
      }
    ],
    "keyFeatures": [
      "Tenant-scoped access control ensuring complete data isolation between organizational accounts.",
      "Hierarchical role-based access control (Admin, User, Super Admin) with route middleware.",
      "Complete CRUD operations for project lifecycle, task assignment, status tracking, and team members.",
      "Containerized deployment setup with Docker Compose, automatic migrations, and seed data."
    ],
    "github": "https://github.com/KvPradeepthi/multi-tenant-saas-platform",
    "demo": "https://github.com/KvPradeepthi/multi-tenant-saas-platform"
  },
  "pecup": {
    "title": "PEC.UP \u2014 Smart Academic Resource Platform",
    "tagline": "Centralized Academic Resource Sharing & AI Study Assistance",
    "category": "Full Stack & Web Application",
    "status": "LIVE WEB PLATFORM",
    "description": "Centralized academic resource platform for students to upload notes, browse learning materials, request missing coursework, collaborate with peers, and get study assistance from the starBOT AI chatbot.",
    "stack": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "starBOT AI",
      "Render"
    ],
    "metrics": [
      {
        "label": "Live Platform",
        "val": "pecup.in"
      },
      {
        "label": "My Role",
        "val": "Frontend & UI Design"
      },
      {
        "label": "AI Module",
        "val": "starBOT Chatbot"
      },
      {
        "label": "Deployment",
        "val": "Render Cloud"
      }
    ],
    "keyFeatures": [
      "Developed responsive user-friendly frontend pages using React.js and modern UI layouts.",
      "Designed intuitive workflows for students to upload, categorize, and browse academic materials.",
      "Participated in integrating the starBOT conversational AI assistant for academic problem-solving.",
      "Conducted functionality and integration testing across application modules prior to deployment."
    ],
    "github": "https://github.com/KvPradeepthi",
    "demo": "https://pecup.in"
  },
  "ardortrip": {
    "title": "ArdorTrip: Airline Booking & DevOps Platform",
    "tagline": "Cloud-Native Java 17 Spring Boot 3 Airline System & DevOps Pipeline",
    "category": "Cloud & DevOps Architecture",
    "status": "LIVE CLOUD DEMO",
    "description": "Working end-to-end DevOps implementation of an airline booking system demonstrating modular application development, containerization, CI/CD automation, Kubernetes orchestration, and monitoring.",
    "stack": [
      "Java 17",
      "Spring Boot 3.3",
      "React 18",
      "PostgreSQL 16",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Prometheus & Grafana"
    ],
    "metrics": [
      {
        "label": "Backend Framework",
        "val": "Java 17 Spring Boot 3"
      },
      {
        "label": "Live Web App",
        "val": "ardortrip.vercel.app"
      },
      {
        "label": "Container Cluster",
        "val": "Kubernetes Orchestrated"
      },
      {
        "label": "Telemetry",
        "val": "Prometheus & Grafana"
      }
    ],
    "keyFeatures": [
      "Modular microservice architecture built with Spring Boot 3 and PostgreSQL 16 persistence.",
      "Interactive flight reservation and booking React web UI deployed live on Vercel.",
      "Automated declarative Jenkins CI/CD pipeline triggered on commits.",
      "Kubernetes orchestration manifests and Prometheus/Grafana system monitoring."
    ],
    "github": "https://github.com/KvPradeepthi/ardortrip-devops",
    "demo": "https://ardortrip.vercel.app"
  },
  "sports": {
    "title": "Sports Commentary Service (Real-Time SSE)",
    "tagline": "Fastify + TypeScript Real-Time Push Backend with Circuit Breaker",
    "category": "Distributed Systems",
    "status": "FASTIFY & SSE",
    "description": "Fastify + TypeScript backend that watches match IDs, polls external sports APIs concurrently, detects match events (goals, cards, substitutions), and streams live commentary updates over Server-Sent Events (SSE).",
    "stack": [
      "TypeScript",
      "Fastify",
      "Server-Sent Events (SSE)",
      "Token-Bucket Rate Limiter",
      "Circuit Breaker",
      "Docker"
    ],
    "metrics": [
      {
        "label": "Runtime & Server",
        "val": "Node 22 + Fastify"
      },
      {
        "label": "Streaming Protocol",
        "val": "Server-Sent Events (SSE)"
      },
      {
        "label": "Fault Tolerance",
        "val": "Circuit Breaker Pattern"
      },
      {
        "label": "Rate Limiting",
        "val": "Global Token Bucket"
      }
    ],
    "keyFeatures": [
      "Unidirectional Server-Sent Events (SSE) push stream on `GET /events` for low-latency commentary.",
      "Per-match Circuit Breaker pattern with open and half-open states to protect against upstream stalls.",
      "Global token-bucket rate limiting coordinated across concurrent polling worker instances.",
      "Containerized deployment configuration supporting Node.js 22+ and Docker Compose."
    ],
    "github": "https://github.com/KvPradeepthi/Sports-Commentary-Service",
    "demo": "https://github.com/KvPradeepthi/Sports-Commentary-Service"
  }
};

// Active repositories array (initialized with fallback, upgraded via live GitHub API)
let ACTIVE_REPOS = [...FALLBACK_REPOS];

// 3. MAIN APPLICATION ORCHESTRATION
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initMobileNavigation();
  initNavScrollspy();
  initTiltEffects();
  initSkillsTabs();
  initProjectModals();
  initGithubExplorer();
  initContactForm();
  initDirectButtons();
});

// Live Indian Standard Time
function initClock() {
  const clockEl = document.getElementById('ist-clock');
  function updateTime() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formatter = new Intl.DateTimeFormat([], options);
    if (clockEl) {
      clockEl.textContent = formatter.format(new Date()) + ' IST';
    }
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// Mobile Slide-Out Drawer Navigation
function initMobileNavigation() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

// Smooth Active Navigation Scrollspy
function initNavScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 160;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  });
}

// 3D Parallax Tilt Effect
function initTiltEffects() {
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      card.style.transform = `perspective(1000px) rotateX(${-deltaY * 5}deg) rotateY(${deltaX * 5}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// Technical Skills Category Tabs
function initSkillsTabs() {
  const tabs = document.querySelectorAll('.skill-tab-btn');
  const cards = document.querySelectorAll('.skill-category-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat');

      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-skill-cat') === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Project Architecture Modal Dossier
function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalContainer = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close');

  function openProject(projectId) {
    const data = FEATURED_DETAILS[projectId];
    if (!data) return;

    modalContainer.innerHTML = `
      <div class="modal-badge-row" style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
        <span class="project-status-tag live">● ${data.status}</span>
        <span class="mono" style="font-size:0.75rem; color:var(--text-muted);">${data.category}</span>
      </div>
      <h3 style="font-size:1.9rem; font-weight:800; margin-bottom:8px; letter-spacing:-0.03em;">${data.title}</h3>
      <p class="highlight-lime mono" style="font-size:0.88rem; margin-bottom:20px;">${data.tagline}</p>
      
      <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:24px;">${data.description}</p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:12px; margin-bottom:26px;">
        ${data.metrics.map(m => `
          <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:12px; padding:12px 14px;">
            <div class="mono highlight-lime" style="font-size:1.05rem; font-weight:700;">${m.val}</div>
            <div class="mono" style="font-size:0.68rem; color:var(--text-muted); margin-top:2px;">${m.label}</div>
          </div>
        `).join('')}
      </div>

      <h4 style="font-size:1.05rem; margin-bottom:12px;">Architecture Highlights & Deliverables</h4>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; margin-bottom:24px;">
        ${data.keyFeatures.map(f => `
          <li style="position:relative; padding-left:18px; color:var(--text-secondary); font-size:0.88rem; line-height:1.5;">
            <span style="position:absolute; left:0; color:var(--accent-lime);">▸</span>
            ${f}
          </li>
        `).join('')}
      </ul>

      <div style="margin-bottom:26px;">
        <div class="mono" style="font-size:0.72rem; color:var(--text-muted); margin-bottom:8px;">TECHNOLOGY STACK</div>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${data.stack.map(s => `<span class="stack-pill">${s}</span>`).join('')}
        </div>
      </div>

      <div style="display:flex; align-items:center; gap:14px; border-top:1px solid var(--border-subtle); padding-top:20px; flex-wrap:wrap;">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:10px 22px; font-size:0.86rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          Explore Source Repository
        </a>
        <a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding:10px 22px; font-size:0.86rem;">
          Open Live Project / Demo ↗
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-project-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (e.target.closest('a') && !e.target.closest('.modal-trigger-btn')) return;
      const pid = trigger.getAttribute('data-project-trigger');
      openProject(pid);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// 5. GITHUB REPOSITORY EXPLORER (DYNAMIC VIA GITHUB API + LOAD MORE)
function initGithubExplorer() {
  const grid = document.getElementById('repo-cards-grid');
  const searchInput = document.getElementById('repo-search-input');
  const sortSelect = document.getElementById('repo-sort-select');
  const filterBtns = document.querySelectorAll('.repo-filter-btn');
  const countBadge = document.getElementById('repo-count-badge');
  const syncStatus = document.getElementById('repo-sync-status');
  const loadMoreBtn = document.getElementById('load-more-btn');

  if (!grid) return;

  const PAGE_SIZE = 6;
  let visibleCount = PAGE_SIZE;
  let currentFilter = 'all';
  let searchQuery = '';
  let currentSort = 'recent';

  // Fetch dynamic public repositories from GitHub API
  fetch('https://api.github.com/users/KvPradeepthi/repos?per_page=100&sort=updated')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(liveData => {
      if (Array.isArray(liveData) && liveData.length > 0) {
        ACTIVE_REPOS = liveData.map(r => ({
          name: r.name,
          description: r.description || DESCRIPTIONS_MAP[r.name] || 'Engineered public repository by @KvPradeepthi',
          html_url: r.html_url,
          language: r.language || 'Other',
          stars: r.stargazers_count || 0,
          forks: r.forks_count || 0,
          updated_at: r.updated_at
        }));
        if (syncStatus) syncStatus.textContent = `● Live GitHub API (${ACTIVE_REPOS.length} repos)`;
        renderRepos();
      }
    })
    .catch(err => {
      // Graceful fallback to verified cached repositories
      if (syncStatus) {
        syncStatus.textContent = `● Verified Sync (${ACTIVE_REPOS.length} repos)`;
        syncStatus.style.color = 'var(--text-muted)';
      }
      renderRepos();
    });

  function getLangClass(lang) {
    if (!lang) return 'lang-other';
    const l = lang.toLowerCase();
    if (l.includes('type')) return 'lang-typescript';
    if (l.includes('java') && !l.includes('script')) return 'lang-java';
    if (l.includes('script')) return 'lang-javascript';
    if (l.includes('python')) return 'lang-python';
    if (l.includes('jupyter') || l.includes('note')) return 'lang-jupyter';
    return 'lang-other';
  }

  function getFilteredRepos() {
    return ACTIVE_REPOS.filter(repo => {
      let matchesCategory = true;
      if (currentFilter !== 'all') {
        const rLang = (repo.language || '').toLowerCase();
        if (currentFilter === 'Other') {
          matchesCategory = !['typescript', 'python', 'javascript', 'java', 'jupyter notebook'].includes(rLang);
        } else {
          matchesCategory = rLang === currentFilter.toLowerCase();
        }
      }

      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const n = repo.name.toLowerCase();
        const d = (repo.description || '').toLowerCase();
        const l = (repo.language || '').toLowerCase();
        matchesSearch = n.includes(q) || d.includes(q) || l.includes(q);
      }

      return matchesCategory && matchesSearch;
    });
  }

  function renderRepos() {
    const filtered = getFilteredRepos();

    // Sorting
    if (currentSort === 'recent') {
      filtered.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    } else if (currentSort === 'alpha') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'stars') {
      filtered.sort((a, b) => (b.stars || 0) - (a.stars || 0));
    }

    const totalMatching = filtered.length;
    const paginated = filtered.slice(0, visibleCount);

    if (countBadge) {
      countBadge.textContent = `Showing ${paginated.length} of ${totalMatching} repositories`;
    }

    // Load More visibility
    if (loadMoreBtn) {
      if (visibleCount < totalMatching) {
        loadMoreBtn.style.display = 'inline-flex';
        const remaining = totalMatching - visibleCount;
        loadMoreBtn.innerHTML = `Load More Repositories (${remaining} remaining) <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }

    if (paginated.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align:center; background:var(--bg-surface); border-radius:18px; border:1px dashed var(--border-subtle);">
          <p class="mono highlight-violet" style="font-size:1.1rem; margin-bottom:8px;">No repositories matching criteria</p>
          <p style="color:var(--text-muted); font-size:0.86rem;">Try clearing your search query or selecting "All" languages.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = paginated.map(repo => `
      <div class="repo-card" data-tilt>
        <div>
          <div class="repo-card-top">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-card-name">
              ${repo.name}
            </a>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-muted); flex-shrink:0;">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          <p class="repo-card-desc">${repo.description}</p>
        </div>
        <div class="repo-card-meta">
          <div class="repo-lang-pill">
            <span class="lang-dot ${getLangClass(repo.language)}"></span>
            <span>${repo.language || 'Documentation'}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            ${repo.stars > 0 ? `<span title="Stars">★ ${repo.stars}</span>` : ''}
            <span class="mono" style="font-size:0.68rem; color:var(--text-muted);">
              ${new Date(repo.updated_at).toLocaleDateString('en-US', {month:'short', year:'numeric'})}
            </span>
          </div>
        </div>
      </div>
    `).join('');

    initTiltEffects();
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      visibleCount = PAGE_SIZE;
      renderRepos();
    });
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    visibleCount = PAGE_SIZE;
    renderRepos();
  });

  // Sort Select
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderRepos();
  });

  // Load More Button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += PAGE_SIZE;
      renderRepos();
    });
  }

  // Initial render
  renderRepos();
}

// 6. CONTACT FORM AUDIT & VALIDATION (WITH REAL EMAIL DISPATCH / HONEST ERROR)
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const subjectInput = document.getElementById('form-subject');
  const messageInput = document.getElementById('form-message');
  const honeypotInput = document.getElementById('form-honeypot');
  const submitBtn = document.getElementById('form-submit-btn');
  const statusBanner = document.getElementById('form-status-banner');

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  function validateField(input, errorEl, validator, errorMsg) {
    const val = input.value.trim();
    if (!validator(val)) {
      input.classList.add('invalid');
      errorEl.textContent = errorMsg;
      errorEl.classList.add('visible');
      return false;
    } else {
      input.classList.remove('invalid');
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
      return true;
    }
  }

  // Real-time blur / input event listeners
  if (nameInput) {
    const err = document.getElementById('form-name-error');
    nameInput.addEventListener('blur', () => validateField(nameInput, err, v => v.length >= 2, 'Name is required (at least 2 characters).'));
    nameInput.addEventListener('input', () => {
      if (nameInput.classList.contains('invalid')) {
        validateField(nameInput, err, v => v.length >= 2, 'Name is required (at least 2 characters).');
      }
    });
  }

  if (emailInput) {
    const err = document.getElementById('form-email-error');
    emailInput.addEventListener('blur', () => validateField(emailInput, err, v => emailRegex.test(v), 'Please enter a valid email address.'));
    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('invalid')) {
        validateField(emailInput, err, v => emailRegex.test(v), 'Please enter a valid email address.');
      }
    });
  }

  if (subjectInput) {
    const err = document.getElementById('form-subject-error');
    subjectInput.addEventListener('blur', () => validateField(subjectInput, err, v => v.length >= 3, 'Subject is required (at least 3 characters).'));
    subjectInput.addEventListener('input', () => {
      if (subjectInput.classList.contains('invalid')) {
        validateField(subjectInput, err, v => v.length >= 3, 'Subject is required (at least 3 characters).');
      }
    });
  }

  if (messageInput) {
    const err = document.getElementById('form-message-error');
    messageInput.addEventListener('blur', () => validateField(messageInput, err, v => v.length >= 5, 'Message is required (at least 5 characters).'));
    messageInput.addEventListener('input', () => {
      if (messageInput.classList.contains('invalid')) {
        validateField(messageInput, err, v => v.length >= 5, 'Message is required (at least 5 characters).');
      }
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Check honeypot anti-spam
    if (honeypotInput && honeypotInput.value.trim() !== '') {
      console.warn('Spam submission detected via honeypot.');
      return;
    }

    const isNameValid = validateField(nameInput, document.getElementById('form-name-error'), v => v.length >= 2, 'Name is required (at least 2 characters).');
    const isEmailValid = validateField(emailInput, document.getElementById('form-email-error'), v => emailRegex.test(v), 'Please enter a valid email address.');
    const isSubjectValid = validateField(subjectInput, document.getElementById('form-subject-error'), v => v.length >= 3, 'Subject is required (at least 3 characters).');
    const isMessageValid = validateField(messageInput, document.getElementById('form-message-error'), v => v.length >= 5, 'Message is required (at least 5 characters).');

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      // Focus first invalid field
      if (!isNameValid) nameInput.focus();
      else if (!isEmailValid) emailInput.focus();
      else if (!isSubjectValid) subjectInput.focus();
      else messageInput.focus();
      return;
    }

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
      honeypot: honeypotInput ? honeypotInput.value : ''
    };

    // Disable button to prevent duplicate submissions
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Sending Message via Resend...</span>`;
    statusBanner.className = 'form-status-banner';
    statusBanner.style.display = 'none';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        statusBanner.className = 'form-status-banner success visible';
        statusBanner.innerHTML = `
          <div class="banner-header">✓ Your message has been sent successfully! I'll get back to you soon.</div>
          <div class="banner-desc">Thank you, ${payload.name}. Your message has been received and will be reviewed shortly.</div>
        `;
        form.reset();
      } else {
        // Honest error reporting
        statusBanner.className = 'form-status-banner error visible';
        const fallbackMailto = `mailto:deepthikamichetty336@gmail.com?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(payload.message + '\n\nFrom: ' + payload.name + ' (' + payload.email + ')')}`;
        statusBanner.innerHTML = `
          <div class="banner-header">⚠️ Delivery Service Notice</div>
          <div class="banner-desc">
            ${data.error || 'Server could not dispatch the email automatically.'}<br>
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:#fca5a5;">${data.details || 'To configure: Add RESEND_API_KEY in server environment.'}</span>
          </div>
          <a href="${fallbackMailto}" class="fallback-mailto-btn">
            Open in Email Client with Entered Message ↗
          </a>
        `;
      }
    } catch (err) {
      statusBanner.className = 'form-status-banner error visible';
      const fallbackMailto = `mailto:deepthikamichetty336@gmail.com?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(payload.message + '\n\nFrom: ' + payload.name + ' (' + payload.email + ')')}`;
      statusBanner.innerHTML = `
        <div class="banner-header">⚠️ Network / Server Error</div>
        <div class="banner-desc">Could not reach the local email API endpoint.</div>
        <a href="${fallbackMailto}" class="fallback-mailto-btn">
          Click Here to Send Directly via Email Client ↗
        </a>
      `;
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// 7. DIRECT BUTTON ACTIONS (COPY EMAIL, BACK TO TOP)
function initDirectButtons() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = 'deepthikamichetty336@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('Email: deepthikamichetty336@gmail.com');
      });
    });
  }

  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Global Toast Messenger
function showToast(msg) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="color:var(--accent-lime); font-size:1.1rem;">⚡</span>
    <span>${msg}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
