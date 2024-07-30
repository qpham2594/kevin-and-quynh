"use client"
import { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('March 29, 2025 00:00:00');
    const now = new Date();

    let timeLeft = {};

    if (targetDate > now) {
      const totalSeconds = Math.floor((targetDate - now) / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      let months = (targetDate.getFullYear() - now.getFullYear()) * 12;
      months -= now.getMonth();
      months += targetDate.getMonth();

      if (targetDate.getDate() < now.getDate()) {
        months -= 1;
      }

      let days = targetDate.getDate() - now.getDate();
      if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
      }

      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      timeLeft = { months, days, hours, minutes, seconds };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="flex flex-wrap justify-center items-center text-white pb-20">
      {timeLeft.months > 0 && (
        <div className="time-unit w-full sm:w-auto mb-2 sm:mb-0">
          <div className="time">{formatNumber(timeLeft.months)}</div>
          <div className="label">Months</div>
        </div>
      )}
      <div className="time-unit w-full sm:w-auto mb-2 sm:mb-0">
        <div className="time">{formatNumber(timeLeft.days)}</div>
        <div className="label">Days</div>
      </div>
      <div className="time-unit w-full sm:w-auto mb-2 sm:mb-0">
        <div className="time">{formatNumber(timeLeft.hours)}</div>
        <div className="label">Hours</div>
      </div>
      <div className="time-unit w-full sm:w-auto mb-2 sm:mb-0">
        <div className="time">{formatNumber(timeLeft.minutes)}</div>
        <div className="label">Minutes</div>
      </div>
      <div className="time-unit w-full sm:w-auto mb-2 sm:mb-0">
        <div className="time">{formatNumber(timeLeft.seconds)}</div>
        <div className="label">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
