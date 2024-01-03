import React from "react";

const Wires = () => {
  return (
    <div className="z-20 relative">
      <div className="fixed top-0 left-0 h-64 w-64">
        <img src="img/wire-1.png" alt="" />
      </div>

      <div className="fixed top-0 right-0 h-64 w-64">
        <img src="img/wire-2.png" alt="" />
      </div>

      <div className="fixed bottom-0 left-0 ">
        <img src="img/wire-3.png" alt="" />
      </div>

      <div className="fixed bottom-0 right-0">
        <img src="img/wire-4.png" alt="" />
      </div>
    </div>
  );
};

export default Wires;
