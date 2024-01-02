import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Background from "./ui/Background";
import Wires from "./ui/wires";

const App = () => {
  return (
    <div>
      <Wires />
      <Background />
      <header className="backdrop-filter backdrop-blur-sm sm:px-8 px-4 py-2 z-10 w-full sticky top-0">
        <Navbar />
      </header>
      <Hero />
    </div>
  );
};

export default App;
