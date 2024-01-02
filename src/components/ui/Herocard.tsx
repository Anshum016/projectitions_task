import React from "react";

export function Herocard() {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <div className="mt-6 w-100">
        <div className="bg-white bg-opacity-10 rounded-lg p-10 shadow-lg">
          <h2 className="text-3xl font-bold  mb-4 tracking-[15px]">
            PROJECTIONS 2024
          </h2>
          <p className="text-lg tracking-[5px]">
            GUJRAT'S LARGEST TECHNICAL FEST
          </p>
        </div>
      </div>
    </div>
  );
}
