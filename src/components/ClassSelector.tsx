import { classList } from "@/types/classes";

interface ClassSelectorProps {
  selectedClass: typeof classList[0];
  onClassChange: (classId: string) => void;
}

export default function ClassSelector({ selectedClass, onClassChange }: ClassSelectorProps) {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        <select
          value={selectedClass.id}
          onChange={(e) => onClassChange(e.target.value)}
          className="bg-gray-800 text-white text-4xl font-bold mb-4 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {classList.map((classItem) => (
            <option key={classItem.id} value={classItem.id}>
              {classItem.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center items-center flex-col space-x-2 text-gray-400">
        <span className="text-lg">Jadwal Kelas - 13 Januari</span>
        <span className="text-sm font-bold">
          <a href="https://www.instagram.com/smkn2_singosari" className="hover:text-gray-300">
            SMK Negeri 2 Singosari
          </a>
        </span>
      </div>
    </div>
  );
}
