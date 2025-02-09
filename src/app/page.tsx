"use client";
import React, { useState } from "react";
import { classList } from "@/types/classes";
import { useSchedule } from "@/hooks/useSchedule";
import ClassSelector from "@/components/ClassSelector";
import CurrentClass from "@/components/CurrentClass";
import ScheduleGrid from "@/components/ScheduleGrid";

export default function RootPage() {
  const [selectedClass, setSelectedClass] = useState(classList[1]); // Default for X RPL 2
  const { schedule, currentDay, days, currentSubject, nextSubject } = useSchedule(selectedClass);

  if (!schedule) return <div>Loading...</div>;

  const handleClassChange = (classId: string) => {
    const newClass = classList.find((c) => c.id === classId);
    if (newClass) setSelectedClass(newClass);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ClassSelector 
          selectedClass={selectedClass} 
          onClassChange={handleClassChange} 
        />

        {currentSubject && (
          <CurrentClass 
            currentSubject={currentSubject} 
            nextSubject={nextSubject} 
          />
        )}

        <ScheduleGrid 
          schedule={schedule}
          currentDay={currentDay}
          days={days}
          currentSubject={currentSubject}
        />
      </div>
    </div>
  );
}
