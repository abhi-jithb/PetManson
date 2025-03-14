import React from "react";
import logo from "../../logo.png";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-white">
      <img src={logo} alt="Loading..." width={100} height={100} />
    </div>
  );
};

export default Loading;
