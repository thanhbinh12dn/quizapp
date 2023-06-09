import React, { useState, useEffect } from "react";

const Quiz = ({ data, questionNumb, setQuestionNumb, setTimeOut }) => {
  const [question, setQuestion] = useState(null);
  const [chooseAnswer, setChooseAnswer] = useState(null);
  const [classAnimate, setClassAnimate] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumb - 1]);
  }, [data, questionNumb]);

  const delay = (callback, duration) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleSelectAnswer = (q) => {
    setChooseAnswer(q);
    setClassAnimate("answer active");

    delay(() => {
      setClassAnimate(
        q.correct
          ? "answer animate-[correct_2s_ease_forwards] text-white"
          : "answer animate-[wrong_2s_ease_forwards] text-white"
      );
    }, 2000);

    delay(() => {
      if (q.correct) {
        delay(() => {
          setQuestionNumb((prev) => prev + 1);
          setChooseAnswer(null);
        }, 1000);
      } else {
        delay(() => {
          setTimeOut(true);
        }, 1000);
      }
    }, 3000);
  };

  return (
    <div className="px-16 md:px-24 mt-6">
      <div className="flex justify-center font-semibold text-2xl">
        <h1 className="text-center">{question?.question}</h1>
      </div>

      <div className="md:px-24 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {question?.answers.map((q, index) => {
            return (
              <div
                key={index}
                className={
                  chooseAnswer === q
                    ? classAnimate
                    : "bg-[#ccc] answer md:hover:bg-yellow-300 cursor-pointer"
                }
                onClick={() => !chooseAnswer && handleSelectAnswer(q)}
              >
                <span>
                  {q.select}. {q.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
