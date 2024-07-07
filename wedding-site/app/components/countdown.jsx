"use client"
import { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('March 29, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (months > 0) {
        timeLeft = { months, days, hours, minutes, seconds };
      } else {
        timeLeft = { days: days + months * 30, hours, minutes, seconds };
      }
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