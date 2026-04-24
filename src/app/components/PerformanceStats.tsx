import { DayData } from '../App';
import { TrendingUp, Award, Target, Zap } from 'lucide-react';

interface PerformanceStatsProps {
  challengeData: DayData[];
}

export function PerformanceStats({ challengeData }: PerformanceStatsProps) {
  const totalProblems = challengeData.reduce((acc, day) => acc + day.completedCount, 0);
  const perfectDays = challengeData.filter(day => day.completedCount === 5).length;
  const partialDays = challengeData.filter(day => day.completedCount > 0 && day.completedCount < 5).length;
  const missedDays = challengeData.filter(day => day.completedCount === 0 && new Date(day.date) < new Date()).length;
  
  const completionRate = Math.round((totalProblems / (challengeData.length * 5)) * 100);
  const consistency = Math.round((perfectDays / challengeData.length) * 100);

  // Calculate weekly performance (last 4 weeks)
  const weeklyData = [];
  for (let i = 0; i < 10; i++) {
    const weekStart = i * 10;
    const weekEnd = Math.min(weekStart + 10, challengeData.length);
    const weekDays = challengeData.slice(weekStart, weekEnd);
    const weekTotal = weekDays.reduce((acc, day) => acc + day.completedCount, 0);
    const weekMax = weekDays.length * 5;
    weeklyData.push({
      week: i + 1,
      completion: Math.round((weekTotal / weekMax) * 100)
    });
  }

  const maxWeekCompletion = Math.max(...weeklyData.map(w => w.completion));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Performance Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-gray-900">Performance Overview</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Overall Completion</span>
              <span className="font-bold text-gray-900">{completionRate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Consistency Score</span>
              <span className="font-bold text-gray-900">{consistency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all"
                style={{ width: `${consistency}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{perfectDays}</div>
              <div className="text-xs text-gray-600">Perfect Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{partialDays}</div>
              <div className="text-xs text-gray-600">Partial Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{missedDays}</div>
              <div className="text-xs text-gray-600">Missed Days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Progress Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-gray-900">Weekly Progress</h3>
        </div>
        
        <div className="flex items-end justify-between gap-2 h-40">
          {weeklyData.map((week) => (
            <div key={week.week} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-gray-100 rounded-t relative" style={{ height: '100%' }}>
                <div
                  className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t absolute bottom-0 transition-all"
                  style={{ height: `${week.completion}%` }}
                />
              </div>
              <div className="text-xs text-gray-600 font-medium">W{week.week}</div>
              <div className="text-xs text-gray-900 font-bold">{week.completion}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 lg:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-gray-900">Achievements</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-lg border-2 text-center ${
            perfectDays >= 1 ? 'bg-yellow-50 border-yellow-500' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="text-3xl mb-2">🏆</div>
            <div className="font-bold text-sm text-gray-900">First Perfect Day</div>
            <div className="text-xs text-gray-600 mt-1">
              {perfectDays >= 1 ? 'Unlocked!' : 'Complete 1 perfect day'}
            </div>
          </div>

          <div className={`p-4 rounded-lg border-2 text-center ${
            perfectDays >= 7 ? 'bg-yellow-50 border-yellow-500' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="text-3xl mb-2">🔥</div>
            <div className="font-bold text-sm text-gray-900">Week Warrior</div>
            <div className="text-xs text-gray-600 mt-1">
              {perfectDays >= 7 ? 'Unlocked!' : '7 perfect days'}
            </div>
          </div>

          <div className={`p-4 rounded-lg border-2 text-center ${
            totalProblems >= 100 ? 'bg-yellow-50 border-yellow-500' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="text-3xl mb-2">💯</div>
            <div className="font-bold text-sm text-gray-900">Century Club</div>
            <div className="text-xs text-gray-600 mt-1">
              {totalProblems >= 100 ? 'Unlocked!' : '100 problems solved'}
            </div>
          </div>

          <div className={`p-4 rounded-lg border-2 text-center ${
            perfectDays >= 30 ? 'bg-yellow-50 border-yellow-500' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="text-3xl mb-2">👑</div>
            <div className="font-bold text-sm text-gray-900">Consistency King</div>
            <div className="text-xs text-gray-600 mt-1">
              {perfectDays >= 30 ? 'Unlocked!' : '30 perfect days'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
