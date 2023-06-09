import React from "react";

import logo from "../assets/img/logo.png";

const Start = ({ setUser }) => {
  const handleSetUser = () => {
    setUser("user");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <img src={logo} alt="quiz" className="w-60 ml-4" />
      <button
        className="bg-red-500 px-12 py-3 rounded text-xl text-white"
        onClick={handleSetUser}
      >
        Start
      </button>
    </div>
  );
};

export default Start;
