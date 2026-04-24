import { DayData } from '../App';

interface HeatmapProps {
  challengeData: DayData[];
  onDayClick: (day: number) => void;
  selectedDay: number | null;
}

export function Heatmap({ challengeData, onDayClick, selectedDay }: HeatmapProps) {
  const getIntensityColor = (completedCount: number) => {
    // GitHub-style colors
    if (completedCount === 0) return 'bg-gray-100 border-gray-200';
    if (completedCount === 1) return 'bg-emerald-200 border-emerald-300';
    if (completedCount === 2) return 'bg-emerald-300 border-emerald-400';
    if (completedCount === 3) return 'bg-emerald-400 border-emerald-500';
    if (completedCount === 4) return 'bg-emerald-500 border-emerald-600';
    return 'bg-emerald-600 border-emerald-700';
  };

  // Split into weeks (10 weeks for 100 days)
  const weeks: DayData[][] = [];
  for (let i = 0; i < challengeData.length; i += 10) {
    weeks.push(challengeData.slice(i, i + 10));
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto pb-2">
        <div className="inline-flex flex-col gap-2 min-w-max">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex gap-2">
              <div className="w-16 text-sm text-gray-600 font-medium flex items-center">
                Week {weekIndex + 1}
              </div>
              <div className="flex gap-2">
                {week.map((day) => (
                  <button
                    key={day.day}
                    onClick={() => onDayClick(day.day)}
                    className={`
                      w-10 h-10 rounded-md border-2 transition-all hover:scale-110 hover:shadow-lg relative group
                      ${getIntensityColor(day.completedCount)}
                      ${selectedDay === day.day ? 'ring-4 ring-indigo-500 scale-110 z-10' : ''}
                    `}
                    title={`Day ${day.day}: ${day.completedCount}/5 problems completed`}
                  >
                    <span className={`text-xs font-bold ${
                      day.completedCount >= 3 ? 'text-white' : 'text-gray-700'
                    }`}>
                      {day.day}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20">
                      <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-xl">
                        <p className="font-bold">Day {day.day}</p>
                        <p className="text-gray-300">{day.completedCount}/5 problems</p>
                        <p className="text-gray-400 text-[10px]">{new Date(day.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-600 font-medium">Less</span>
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-md bg-gray-100 border-2 border-gray-200" title="0 problems" />
          <div className="w-6 h-6 rounded-md bg-emerald-200 border-2 border-emerald-300" title="1 problem" />
          <div className="w-6 h-6 rounded-md bg-emerald-300 border-2 border-emerald-400" title="2 problems" />
          <div className="w-6 h-6 rounded-md bg-emerald-400 border-2 border-emerald-500" title="3 problems" />
          <div className="w-6 h-6 rounded-md bg-emerald-500 border-2 border-emerald-600" title="4 problems" />
          <div className="w-6 h-6 rounded-md bg-emerald-600 border-2 border-emerald-700" title="5 problems (Perfect!)" />
        </div>
        <span className="text-sm text-gray-600 font-medium">More</span>
      </div>
    </div>
  );
}