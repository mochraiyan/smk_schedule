import { Subject } from "@/types/schedule";
import CountdownTimer from "./CountdownTimer";

interface CurrentClassProps {
  currentSubject: Subject;
  nextSubject: Subject | null;
}

export default function CurrentClass({ currentSubject, nextSubject }: CurrentClassProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-white">Kelas Berlangsung</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <p className="text-2xl font-bold text-indigo-400">{currentSubject.name}</p>
          <p className="text-gray-300">{currentSubject.teacher}</p>
          <p className="text-sm text-gray-400">
            {currentSubject.start_time} - {currentSubject.end_time}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <CountdownTimer targetTime={currentSubject.end_time} label="Waktu Yang Tersisa" />
        </div>

        {nextSubject && (
          <div className="md:col-span-3 mt-4">
            <h2 className="text-xl font-semibold mb-4 text-white">Kelas Selanjutnya</h2>
            <p className="text-2xl font-bold text-indigo-400">{nextSubject.name}</p>
            <p className="text-gray-300">{nextSubject.teacher}</p>
            <p className="text-sm text-gray-400">
              {nextSubject.start_time} - {nextSubject.end_time}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
