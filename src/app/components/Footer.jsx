// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className=" bg-slate-900 max-md:mt-4">
      <hr className=" border-gray-700 sm:mx-auto " />
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col gap-y-5">
            <a href="/" className="flex items-center">
              {/* <img
                src="/finalLogo1.png"
                className="h-16 w-16 me-3"
                alt="Om Trading Logo"
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Om Trading Corporation
              </span>
            </a>
            <div className="text-sm max-md:hidden text-gray-200 sm:text-center ">
              © 2024{" "}
              <a href="/" className="hover:underline">
               CoderFortify Technologies™
              </a>
              . All Rights Reserved.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-3 md:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                About
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a
                    href="/about"
                    className="hover:underline"
                  >
                    Om Trading
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Effilearn"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
        <hr className="my-6 md:hidden border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex md:hidden sm:items-center sm:justify-center">
          <div className="text-sm text-gray-200 sm:text-center ">
            © 2024{" "}
            <a href="/" className="hover:underline">
              CodersFortify Technologies™
            </a>
            . All Rights Reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
