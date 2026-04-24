import { DayData } from '../App';
import { CheckCircle2, Circle, Calendar } from 'lucide-react';

interface DayCardProps {
  dayData: DayData;
  onToggleProblem: (problemId: string) => void;
}

export function DayCard({ dayData, onToggleProblem }: DayCardProps) {
  const progress = (dayData.completedCount / dayData.problems.length) * 100;

  const getDifficultyColor = (difficulty?: string) => {
    if (difficulty === 'easy') return 'bg-green-100 text-green-700 border-green-300';
    if (difficulty === 'medium') return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    if (difficulty === 'hard') return 'bg-red-100 text-red-700 border-red-300';
    return 'bg-gray-100 text-gray-700 border-gray-300';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            <div>
              <h3 className="text-2xl font-bold">Day {dayData.day}</h3>
              <p className="text-indigo-100 text-sm">{new Date(dayData.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{dayData.completedCount}/5</div>
            <div className="text-indigo-100 text-sm">completed</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-indigo-400 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-full transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Problems List */}
      <div className="p-6">
        <h4 className="text-lg font-bold text-gray-900 mb-4">Today's Tasks</h4>
        <div className="space-y-3">
          {dayData.problems.map((problem, index) => (
            <button
              key={problem.id}
              onClick={() => onToggleProblem(problem.id)}
              className={`
                w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all
                ${problem.completed 
                  ? 'bg-green-50 border-green-500 hover:bg-green-100' 
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                }
              `}
            >
              {problem.completed ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              ) : (
                <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
              )}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-sm font-medium ${
                    problem.completed ? 'text-green-900 line-through' : 'text-gray-900'
                  }`}>
                    Problem {index + 1}
                  </span>
                  {problem.difficulty && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold border ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty.toUpperCase()}
                    </span>
                  )}
                  {problem.category && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-indigo-100 text-indigo-700 border border-indigo-300">
                      {problem.category}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${
                  problem.completed ? 'text-green-700 line-through' : 'text-gray-600'
                }`}>
                  {problem.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Completion Message */}
        {dayData.completedCount === 5 && (
          <div className="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg text-center">
            <p className="text-green-900 font-bold text-lg">🎉 Perfect Day! All tasks completed!</p>
            <p className="text-green-700 text-sm mt-1">Keep up the amazing work!</p>
          </div>
        )}
      </div>
    </div>
  );
}