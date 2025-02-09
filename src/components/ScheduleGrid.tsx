import { Schedule, Subject } from "@/types/schedule";
import SubjectCard from "@/components/SubjectCard";

interface ScheduleGridProps {
  schedule: Schedule;
  currentDay: string;
  days: string[];
  currentSubject: Subject | null;
}

export default function ScheduleGrid({ schedule, currentDay, days, currentSubject }: ScheduleGridProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-700">
        {days.slice(1, 6).map((day) => (
          <div
            key={day}
            className={`p-4 ${day === currentDay ? "bg-gray-700" : "bg-gray-800"}`}
          >
            <h3
              className={`text-lg font-semibold mb-3 ${
                day === currentDay ? "text-indigo-400" : "text-white"
              }`}
            >
              {day}
            </h3>
            {schedule.days[day]?.map((subject, index) => (
              <SubjectCard
                key={index}
                subject={subject}
                isActive={currentSubject?.name === subject.name && day === currentDay}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
