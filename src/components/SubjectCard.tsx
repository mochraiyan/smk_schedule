import { Subject } from "@/types/schedule";

interface SubjectCardProps {
  subject: Subject;
  isActive: boolean;
}

export default function SubjectCard({ subject, isActive }: SubjectCardProps) {
  return (
    <div
      className={`p-3 rounded-lg mb-2 ${
        isActive
          ? "bg-indigo-900/50 border-l-4 border-indigo-500"
          : "bg-gray-700"
      }`}
    >
      <p className="font-semibold text-white">{subject.name}</p>
      <p className="text-sm text-gray-300">{subject.teacher}</p>
      <p className="text-xs text-gray-400">
        {subject.start_time} - {subject.end_time}
      </p>
    </div>
  );
}
