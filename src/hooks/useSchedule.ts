import { useState, useEffect } from 'react';
import { Schedule, Subject } from '@/types/schedule';
import { ClassConfig } from '@/types/classes';

export const useSchedule = (selectedClass: ClassConfig) => {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const currentDay = days[new Date().getDay()];

  useEffect(() => {
    const loadSchedule = async () => {
      try {
        const response = await fetch(selectedClass.scheduleFile);
        const data = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error("Failed to load schedule:", error);
      }
    };

    loadSchedule();
  }, [selectedClass]);

  const getCurrentSubject = (subjects: Subject[]): Subject | null => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    return subjects.find((subject) => {
      const [startHour, startMinute] = subject.start_time.split(":").map(Number);
      const [endHour, endMinute] = subject.end_time.split(":").map(Number);
      const start = startHour * 60 + startMinute;
      const end = endHour * 60 + endMinute;

      return currentTime >= start && currentTime < end;
    }) || null;
  };

  const getNextSubject = (subjects: Subject[]): Subject | null => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    return subjects.find((subject) => {
      const [startHour, startMinute] = subject.start_time.split(":").map(Number);
      const start = startHour * 60 + startMinute;
      return start > currentTime;
    }) || null;
  };

  const currentSubject = schedule?.days[currentDay] 
    ? getCurrentSubject(schedule.days[currentDay])
    : null;

  const nextSubject = schedule?.days[currentDay]
    ? getNextSubject(schedule.days[currentDay])
    : null;

  return {
    schedule,
    currentDay,
    days,
    currentSubject,
    nextSubject,
  };
};
