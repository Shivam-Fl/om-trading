"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const navLink = [
  {
    id: 0,
    header: "Home",
    link: "/",
  },
  {
    id: 1,
    header: "Services",
    link: "/services",
  },
  {
    id: 3,
    header: "Products",
    link: "/products",
  },
  {
    id: 2,
    header: "About",
    link: "/about",
  },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Check session storage for active link
    const storedActiveLink = sessionStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
    // Store active link in session storage
    sessionStorage.setItem("activeLink", link);
    if (window.innerWidth <= 768) {
      setToggle(false);
    }
  };

  const handleMenuToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className="sticky top-0 bg-gray-100  z-[200] font-[NeoSansPro-Regular]">
      <div className="flex justify-between align-center text-lg sm:text-2xl mx-auto p-4  items-center">
        <a
          href="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <img
            src="omLogo.png"
            className="h-12 w-36 md:h-20 md:w-60"
            alt="Om Trading logo"
          />
        </a>
        
        <div className="hidden md:flex self-center z-[200]">
          <div className="flex gap-x-8 lg:gap-x-20 self-center text-lg xl:text-xl font-montserrat font-bold dark:font-medium dark:text-gray-100 text-gray-800">
            {navLink.map((link) => (
              <Link key={link.id} href={link.link}>
                <div
                  className={`${
                    activeLink === link.link ? "text-blue-700 " : ""
                  }`}
                  onClick={() => handleClick(link.link)}
                >
                  {link.header}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-x-2 sm:gap-x-4 self-center">
          <a href="/contact">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Contact
            </button>
          </a>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-1 rounded-lg text-white hover:ring-white focus:outline-none focus:ring-2 focus:rig-offset-2 focus:ring-offset-white focus:ring-white focus:rig-offset-2 z-[250] "
            >
              <span className="sr-only">Open main menu</span>
              {toggle ? (
                <img className="h-8 w-8" src="/close1.svg" alt="" />
              ) : (
                <img className="h-8 w-8" src="/menu.svg" alt="" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Changes In Weight for Responsive */}
      {toggle && (
        <div className="fixed md:hidden  left-0  w-full h-full   dark:bg-opacity-10 bg-opacity-20 bg-white backdrop-filter dark:backdrop-blur-lg  backdrop-blur-xl  z-[200]">
          <div className="flex flex-col px-4 py-6 space-y-4 mt-10">
            {navLink.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                onClick={() => handleClick(link.link)}
              >
                <div
                  className={`${
                    activeLink === link.link
                      ? "text-white bg-blue-700 "
                      : "text-gray-800"
                  } text-center cursor-pointer  font-bold  block px-3 py-2 rounded-md   md:p-0    md:bg-transparent   self-center text-lg  font-montserrat  `}
                >
                  {link.header}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
