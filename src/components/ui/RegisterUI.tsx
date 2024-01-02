import React from "react";

const RegisterUI = () => {
  return (
    <div className="flex items-center justify-start h-screen">
      <div className="absolute bg-purple-400 blur-3xl">
        <div className="border h-[100px] w-[100px]"></div>
      </div>
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px]  animate-ping "></div>
      <div className="flex items-center justify-center h-full text-center p-10">
        <p className="text-lg">
          R <br />
          e <br />
          g <br />
          i <br />
          s <br />
          t <br />
          e <br />r
        </p>
      </div>
    </div>
  );
};

export default RegisterUI;
