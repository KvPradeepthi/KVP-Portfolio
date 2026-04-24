import { DayData } from '../App';
import { Calendar, TrendingUp, CheckCircle2, XCircle } from 'lucide-react';

interface WeeklyProgressProps {
  challengeData: DayData[];
  currentDay: number;
}

export function WeeklyProgress({ challengeData, currentDay }: WeeklyProgressProps) {
  // Early return if no data
  if (!challengeData || challengeData.length === 0) {
    return null;
  }

  // Split into weeks (10 days per week)
  const weeks = [];
  for (let i = 0; i < 10; i++) {
    const weekStart = i * 10;
    const weekEnd = Math.min(weekStart + 10, challengeData.length);
    const weekDays = challengeData.slice(weekStart, weekEnd);
    
    // Skip if no days in this week
    if (weekDays.length === 0) continue;
    
    const totalProblems = weekDays.reduce((acc, day) => acc + day.completedCount, 0);
    const maxProblems = weekDays.length * 5;
    const completionRate = Math.round((totalProblems / maxProblems) * 100);
    const perfectDays = weekDays.filter(day => day.completedCount === 5).length;
    const partialDays = weekDays.filter(day => day.completedCount > 0 && day.completedCount < 5).length;
    const missedDays = weekDays.filter(day => day.completedCount === 0).length;
    
    const isCurrentWeek = currentDay > weekStart && currentDay <= weekEnd;
    
    weeks.push({
      weekNumber: i + 1,
      days: weekDays,
      totalProblems,
      maxProblems,
      completionRate,
      perfectDays,
      partialDays,
      missedDays,
      isCurrentWeek,
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-3">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Weekly Progress Tracker</h2>
          <p className="text-sm text-gray-600">Detailed breakdown of your weekly performance</p>
        </div>
      </div>

      <div className="space-y-4">
        {weeks.map((week) => (
          <div
            key={week.weekNumber}
            className={`rounded-xl border-2 transition-all ${
              week.isCurrentWeek
                ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-300'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            {/* Week Header */}
            <div className={`p-4 border-b-2 ${week.isCurrentWeek ? 'border-indigo-200' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    week.isCurrentWeek 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-300 text-gray-700'
                  }`}>
                    Week {week.weekNumber}
                  </div>
                  {week.days.length > 0 && (
                    <div className="text-sm text-gray-600">
                      Days {week.days[0].day} - {week.days[week.days.length - 1].day}
                    </div>
                  )}
                  {week.isCurrentWeek && (
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      CURRENT
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{week.completionRate}%</p>
                    <p className="text-xs text-gray-600">Completion</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600">{week.totalProblems}</p>
                    <p className="text-xs text-gray-600">of {week.maxProblems} solved</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Week Stats */}
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xl font-bold text-gray-900">{week.perfectDays}</p>
                    <p className="text-xs text-gray-600">Perfect Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <TrendingUp className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <div>
                    <p className="text-xl font-bold text-gray-900">{week.partialDays}</p>
                    <p className="text-xs text-gray-600">Partial Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-xl font-bold text-gray-900">{week.missedDays}</p>
                    <p className="text-xs text-gray-600">Missed Days</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Week Progress</span>
                  <span>{week.totalProblems} / {week.maxProblems} problems</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all flex items-center justify-end pr-2"
                    style={{ width: `${week.completionRate}%` }}
                  >
                    {week.completionRate > 10 && (
                      <span className="text-xs font-bold text-white">{week.completionRate}%</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Day Circles */}
              <div className="flex gap-2">
                {week.days.map((day) => {
                  if (!day) return null;
                  
                  const getColor = () => {
                    if (day.completedCount === 5) return 'bg-green-500 border-green-600';
                    if (day.completedCount >= 3) return 'bg-yellow-400 border-yellow-500';
                    if (day.completedCount >= 1) return 'bg-orange-400 border-orange-500';
                    return 'bg-gray-300 border-gray-400';
                  };

                  return (
                    <div
                      key={day.day}
                      className={`flex-1 rounded-lg border-2 ${getColor()} p-2 text-center transition-all hover:scale-105`}
                      title={`Day ${day.day}: ${day.completedCount}/5 problems`}
                    >
                      <p className="text-xs font-bold text-white">{day.day}</p>
                      <p className="text-xs text-white opacity-90">{day.completedCount}/5</p>
                    </div>
                  );
                })}
              </div>

              {/* Week Status Message */}
              <div className="mt-4 text-center">
                {week.completionRate === 100 && (
                  <p className="text-sm font-bold text-green-600">🎉 Perfect Week! All problems completed!</p>
                )}
                {week.completionRate >= 80 && week.completionRate < 100 && (
                  <p className="text-sm font-bold text-blue-600">⭐ Great week! Almost perfect!</p>
                )}
                {week.completionRate >= 50 && week.completionRate < 80 && (
                  <p className="text-sm font-bold text-yellow-600">💪 Good progress! Keep pushing!</p>
                )}
                {week.completionRate < 50 && week.completionRate > 0 && (
                  <p className="text-sm font-bold text-orange-600">📈 Room for improvement!</p>
                )}
                {week.completionRate === 0 && (
                  <p className="text-sm font-bold text-gray-600">🚀 Ready to start this week!</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}