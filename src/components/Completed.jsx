import React from "react";

import congratulations from "../assets/img/congratulations.png";
import completed from "../assets/img/completed.png";

const Completed = ({ data, numberCorrect }) => {
  if (numberCorrect > 4) {
    var img = congratulations;
    var title = "Congratulations!";
    var text = "You are amazing!";
  } else {
    img = completed;
    title = "Completed!";
    text = "Better luck next time!";
  }
  return (
    <>
      <img className="w-20 mt-3" src={img} alt="congratulations" />
      <h1 className="font-semibold text-3xl">{title}</h1>
      <p className="text-xl">{text}</p>
      <p className="text-xl">
        {numberCorrect}/{data.length} correct answers
      </p>
    </>
  );
};

export default Completed;
