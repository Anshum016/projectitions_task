import React from "react";

const Wires = () => {
  return (
    <div className="fixed inset-0 z-20">
      <div className="relative">
        <div className="absolute left-0 top-0">
          <img src="img/wire-1.png" alt="" />
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-0">
          <img src="img/wire-2.png" alt="" />
        </div>
      </div>

      <div className="absolute left-0 bottom-0">
        <div className="relative">
          <img src="img/wire-3.png" alt="" />
        </div>
      </div>

      <div className="absolute right-0 bottom-0">
        <div className="relative">
          <img src="img/wire-4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wires;
