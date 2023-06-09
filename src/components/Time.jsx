import React, { useState, useEffect } from "react";

const Time = ({ setTimeOut, questionNumb }) => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (time === 0) return setTimeOut(true);

    const timeId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, [time, setTimeOut]);

  useEffect(() => {
    setTime(30);
  }, [questionNumb]);

  return (
    <div className="flex flex-col items-center">
      <span className="font-semibold text-4xl">{time}</span>
      <span>sec</span>
    </div>
  );
};

export default Time;
