import React, { useState, useEffect } from "react";

import Start from "./Start";
import Time from "./Time";
import Quiz from "./Quiz";
import Completed from "./Completed";

const Home = () => {
  const [user, setUser] = useState("");
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumb, setQuestionNumb] = useState(1);
  const [numberCorrect, setNumberCorrect] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const url = "http://localhost:3001/question/";
        const response = await fetch(url);
        const responseJSON = await response.json();

        setData(responseJSON);
      } catch (error) {
        console.log("Failed to fetch featured products: ", error.message);
      }
    }
    fetchQuestion();
  }, []);

  useEffect(() => {
    setNumberCorrect(questionNumb > 1 ? questionNumb - 1 : "0");
    if (questionNumb > 10) {
      setTimeOut(true);
    }
  }, [questionNumb]);

  const resetQuiz = () => {
    setUser("");
    setQuestionNumb(1);
    setNumberCorrect(numberCorrect);
    setTimeOut(false);
  };

  const handleSetQuestionNum = (value) => {
    setQuestionNumb(value);
  };

  const handleSetTimeOut = (value) => {
    setTimeOut(value);
  };

  return (
    <div>
      {!user ? (
        <div className="h-screen flex justify-center items-center">
          <Start setUser={setUser} />
        </div>
      ) : (
        <>
          {timeOut ? (
            <div className="pt-16 flex justify-center">
              <div className="flex flex-col items-center gap-2 w-[80%] h-72 md:w-[40%] md:h-80 bg-[#D2E9E9] rounded-xl">
                <Completed data={data} numberCorrect={numberCorrect} />
                <button
                  className="bg-red-500 mt-4 text-white px-4 py-2 rounded-lg"
                  onClick={resetQuiz}
                >
                  Play Again
                </button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <div className="text-center mt-10 font-semibold">
                  <h1 className="text-2xl">QUIZZ APP</h1>
                  <h2 className="text-lg md:text-xl">
                    Question {questionNumb}/{data.length}
                  </h2>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="w-28 h-28 border-red-600 border-solid border-4 rounded-[50%] flex justify-center items-center">
                    <Time
                      setTimeOut={handleSetTimeOut}
                      questionNumb={questionNumb}
                    />
                  </div>
                </div>

                <div>
                  <Quiz
                    data={data}
                    questionNumb={questionNumb}
                    setQuestionNumb={handleSetQuestionNum}
                    setTimeOut={handleSetTimeOut}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
