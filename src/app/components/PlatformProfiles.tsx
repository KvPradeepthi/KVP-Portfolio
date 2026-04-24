import { useState, useEffect } from 'react';
import { Code2, ExternalLink, Edit2, Save, X, Upload, FileText, Download } from 'lucide-react';

interface PlatformProfile {
  username: string;
  problemsSolved: number;
  rating: string;
  rank: string;
}

interface ProfileData {
  leetcode: PlatformProfile;
  codechef: PlatformProfile;
  codeforces: PlatformProfile;
  geeksforgeeks: PlatformProfile;
  resumeFileName: string | null;
  resumeFileUrl: string | null;
}

export function PlatformProfiles() {
  const [profiles, setProfiles] = useState<ProfileData>({
    leetcode: { username: '', problemsSolved: 0, rating: '', rank: '' },
    codechef: { username: '', problemsSolved: 0, rating: '', rank: '' },
    codeforces: { username: '', problemsSolved: 0, rating: '', rank: '' },
    geeksforgeeks: { username: '', problemsSolved: 0, rating: '', rank: '' },
    resumeFileName: null,
    resumeFileUrl: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfiles, setEditedProfiles] = useState(profiles);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('platformProfiles');
    if (stored) {
      const data = JSON.parse(stored);
      setProfiles(data);
      setEditedProfiles(data);
    }
  }, []);

  const handleSave = () => {
    setProfiles(editedProfiles);
    localStorage.setItem('platformProfiles', JSON.stringify(editedProfiles));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfiles(profiles);
    setIsEditing(false);
  };

  const updateProfile = (platform: keyof Omit<ProfileData, 'resumeFileName' | 'resumeFileUrl'>, field: keyof PlatformProfile, value: string | number) => {
    setEditedProfiles(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        [field]: value,
      },
    }));
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
        alert('Please upload a PDF file');
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const fileUrl = event.target?.result as string;
        const updatedProfiles = {
          ...editedProfiles,
          resumeFileName: file.name,
          resumeFileUrl: fileUrl,
        };
        setEditedProfiles(updatedProfiles);
        setProfiles(updatedProfiles);
        localStorage.setItem('platformProfiles', JSON.stringify(updatedProfiles));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadResume = () => {
    if (profiles.resumeFileUrl && profiles.resumeFileName) {
      const link = document.createElement('a');
      link.href = profiles.resumeFileUrl;
      link.download = profiles.resumeFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const platformData = [
    {
      key: 'leetcode' as const,
      name: 'LeetCode',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      url: 'https://leetcode.com/',
      icon: '💻',
    },
    {
      key: 'codechef' as const,
      name: 'CodeChef',
      color: 'from-brown-600 to-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-800',
      url: 'https://www.codechef.com/',
      icon: '👨‍🍳',
    },
    {
      key: 'codeforces' as const,
      name: 'Codeforces',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      url: 'https://codeforces.com/',
      icon: '⚔️',
    },
    {
      key: 'geeksforgeeks' as const,
      name: 'GeeksforGeeks',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      url: 'https://www.geeksforgeeks.org/',
      icon: '🤓',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-3">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Coding Platform Profiles</h2>
            <p className="text-sm text-gray-600">Connect your coding profiles and upload resume</p>
          </div>
        </div>
        
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit Profiles
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Resume Upload Section */}
      <div className="mb-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-600 rounded-lg p-3">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Resume / CV</h3>
              {profiles.resumeFileName ? (
                <p className="text-sm text-gray-600">
                  📄 {profiles.resumeFileName}
                </p>
              ) : (
                <p className="text-sm text-gray-600">No resume uploaded yet</p>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            {profiles.resumeFileName && (
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            )}
            <label className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
              <Upload className="w-4 h-4" />
              {profiles.resumeFileName ? 'Update' : 'Upload'} Resume
              <input
                type="file"
                accept=".pdf"
                onChange={handleResumeUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">Only PDF files up to 5MB are supported</p>
      </div>

      {/* Platform Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platformData.map((platform) => {
          const profile = isEditing ? editedProfiles[platform.key] : profiles[platform.key];
          
          return (
            <div
              key={platform.key}
              className={`${platform.bgColor} rounded-xl p-6 border-2 ${platform.borderColor}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`bg-gradient-to-br ${platform.color} rounded-lg p-3 text-2xl`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{platform.name}</h3>
                    {profile.username && !isEditing && (
                      <a
                        href={`${platform.url}${profile.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm ${platform.textColor} flex items-center gap-1 hover:underline`}
                      >
                        @{profile.username}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {isEditing ? (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">Username</label>
                    <input
                      type="text"
                      value={profile.username}
                      onChange={(e) => updateProfile(platform.key, 'username', e.target.value)}
                      placeholder="Enter username"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-gray-700 mb-1 block">Problems Solved</label>
                      <input
                        type="number"
                        value={profile.problemsSolved}
                        onChange={(e) => updateProfile(platform.key, 'problemsSolved', parseInt(e.target.value) || 0)}
                        placeholder="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 mb-1 block">Rating</label>
                      <input
                        type="text"
                        value={profile.rating}
                        onChange={(e) => updateProfile(platform.key, 'rating', e.target.value)}
                        placeholder="e.g., 1500"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">Rank/Badge</label>
                    <input
                      type="text"
                      value={profile.rank}
                      onChange={(e) => updateProfile(platform.key, 'rank', e.target.value)}
                      placeholder="e.g., Expert, 3★"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
              ) : (
                <>
                  {profile.username ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Problems Solved</span>
                        <span className="text-xl font-bold text-gray-900">{profile.problemsSolved}</span>
                      </div>
                      {profile.rating && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Rating</span>
                          <span className={`text-lg font-bold ${platform.textColor}`}>{profile.rating}</span>
                        </div>
                      )}
                      {profile.rank && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Rank/Badge</span>
                          <span className={`text-sm font-bold ${platform.textColor} px-3 py-1 rounded-full bg-white border-2 ${platform.borderColor}`}>
                            {profile.rank}
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      <p className="text-sm">No profile added yet</p>
                      <p className="text-xs mt-1">Click "Edit Profiles" to add your {platform.name} profile</p>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      {!isEditing && (
        <div className="mt-6 pt-6 border-t-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Overall Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200 text-center">
              <p className="text-2xl font-bold text-purple-600">
                {platformData.reduce((sum, p) => sum + (profiles[p.key].username ? 1 : 0), 0)}
              </p>
              <p className="text-xs text-gray-600 mt-1">Platforms Connected</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200 text-center">
              <p className="text-2xl font-bold text-blue-600">
                {platformData.reduce((sum, p) => sum + profiles[p.key].problemsSolved, 0)}
              </p>
              <p className="text-xs text-gray-600 mt-1">Total Problems Solved</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 text-center">
              <p className="text-2xl font-bold text-green-600">
                {platformData.filter(p => profiles[p.key].rating).length}
              </p>
              <p className="text-xs text-gray-600 mt-1">Rated Platforms</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200 text-center">
              <p className="text-2xl font-bold text-orange-600">
                {profiles.resumeFileName ? '✓' : '✗'}
              </p>
              <p className="text-xs text-gray-600 mt-1">Resume Status</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
