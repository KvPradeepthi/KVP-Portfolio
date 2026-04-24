import { DayData } from '../App';
import { Code2, Trophy, Star, TrendingUp } from 'lucide-react';

interface CodingProfileProps {
  challengeData: DayData[];
}

export function CodingProfile({ challengeData }: CodingProfileProps) {
  // Calculate statistics
  const totalSolved = challengeData.reduce((acc, day) => acc + day.completedCount, 0);
  
  // Count by difficulty
  const easyCount = challengeData.reduce((acc, day) => 
    acc + day.problems.filter(p => p.completed && p.difficulty === 'easy').length, 0
  );
  const mediumCount = challengeData.reduce((acc, day) => 
    acc + day.problems.filter(p => p.completed && p.difficulty === 'medium').length, 0
  );
  const hardCount = challengeData.reduce((acc, day) => 
    acc + day.problems.filter(p => p.completed && p.difficulty === 'hard').length, 0
  );

  // Count by category
  const categoryMap: Record<string, number> = {};
  challengeData.forEach(day => {
    day.problems.forEach(problem => {
      if (problem.completed && problem.category) {
        categoryMap[problem.category] = (categoryMap[problem.category] || 0) + 1;
      }
    });
  });

  const topCategories = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const totalProblems = challengeData.length * 5;
  const solvedPercentage = Math.round((totalSolved / totalProblems) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg p-3">
          <Code2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Coding Profile</h2>
          <p className="text-sm text-gray-600">Your coding journey statistics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Problem Stats */}
        <div className="space-y-6">
          {/* Total Problems Solved */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-600">Total Problems Solved</p>
                  <p className="text-3xl font-bold text-gray-900">{totalSolved}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">of {totalProblems}</p>
                <p className="text-2xl font-bold text-indigo-600">{solvedPercentage}%</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all"
                style={{ width: `${solvedPercentage}%` }}
              />
            </div>
          </div>

          {/* Difficulty Breakdown */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-indigo-600" />
              Difficulty Breakdown
            </h3>
            <div className="space-y-3">
              {/* Easy */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-bold text-green-600">Easy</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-green-500 h-full transition-all"
                        style={{ width: `${(easyCount / totalProblems) * 100}%` }}
                      />
                    </div>
                    <div className="w-20 text-right">
                      <span className="text-lg font-bold text-gray-900">{easyCount}</span>
                      <span className="text-sm text-gray-600 ml-1">solved</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medium */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-bold text-yellow-600">Medium</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-yellow-500 h-full transition-all"
                        style={{ width: `${(mediumCount / totalProblems) * 100}%` }}
                      />
                    </div>
                    <div className="w-20 text-right">
                      <span className="text-lg font-bold text-gray-900">{mediumCount}</span>
                      <span className="text-sm text-gray-600 ml-1">solved</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hard */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm font-bold text-red-600">Hard</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-red-500 h-full transition-all"
                        style={{ width: `${(hardCount / totalProblems) * 100}%` }}
                      />
                    </div>
                    <div className="w-20 text-right">
                      <span className="text-lg font-bold text-gray-900">{hardCount}</span>
                      <span className="text-sm text-gray-600 ml-1">solved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Categories */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            Top Categories
          </h3>
          
          {topCategories.length > 0 ? (
            <div className="space-y-3">
              {topCategories.map(([category, count], index) => {
                const maxCount = topCategories[0][1];
                const percentage = (count / maxCount) * 100;
                const colors = [
                  'from-indigo-500 to-purple-500',
                  'from-blue-500 to-cyan-500',
                  'from-green-500 to-emerald-500',
                  'from-yellow-500 to-orange-500',
                  'from-pink-500 to-rose-500',
                ];
                
                return (
                  <div key={category} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors[index]} flex items-center justify-center text-white font-bold text-sm`}>
                          {index + 1}
                        </div>
                        <span className="font-bold text-gray-900">{category}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${colors[index]} h-full transition-all`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>Start solving problems to see your top categories!</p>
            </div>
          )}

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 text-center">
              <p className="text-2xl font-bold text-green-600">{easyCount + mediumCount + hardCount}</p>
              <p className="text-sm text-gray-600">Problems Solved</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200 text-center">
              <p className="text-2xl font-bold text-blue-600">{Object.keys(categoryMap).length}</p>
              <p className="text-sm text-gray-600">Categories Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
