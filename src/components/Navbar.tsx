"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#home", label: "Events" },
    { href: "#history", label: "History" },
    { href: "#about-us", label: "About Us" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#campus-ambassador ", label: "Campus Ambassador" },
    { href: "#contect-us", label: "Contect Us" },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-10 w-full ">
        <nav className="flex justify-between items-center max-container ">
          <a href="/" className="text-3xl font-bold">
            <img src="img/logo.png" width={154} height={42} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;
