"use client";
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetTime: string;
  label: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetTime,
  label,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const [hours, minutes] = targetTime.split(":").map(Number);
      const target = new Date();
      target.setHours(hours, minutes, 0);

      const now = new Date();
      let diff = target.getTime() - now.getTime();

      if (diff < 0) {
        return "00:00:00";
      }

      const hours_left = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours_left * (1000 * 60 * 60);
      const minutes_left = Math.floor(diff / (1000 * 60));
      diff -= minutes_left * (1000 * 60);
      const seconds_left = Math.floor(diff / 1000);

      return `${String(hours_left).padStart(2, "0")}:${String(
        minutes_left
      ).padStart(2, "0")}:${String(seconds_left).padStart(2, "0")}`;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="text-center">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-2xl font-bold font-mono text-indigo-400">
        {timeLeft}
      </div>
    </div>
  );
};

export default CountdownTimer;
