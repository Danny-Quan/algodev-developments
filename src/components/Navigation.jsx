import React from "react";
import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";

function Navigation() {
  function toggleNav() {
    const nav = document.querySelector("nav");
    const navItems = document.querySelector(".nav--items");
    nav.classList.toggle("nav--active");
    navItems.classList.toggle("navItems--active");
  }
  return (
    <div className="shadow-lg mb-2 sticky top-0 z-40 bg-white">
      <div className="container">
        <nav className="flex xl:flex-row lg:flex-row md:flex-row  justify-between items-center bg-white ">
          <div className="brand--name xl:relative lg:relative md:relative xl:top-0 lg:top-0 md:top-0 top-0 absolute">
            <h2 className="font-bold text-2xl text-primary">AlgoDev</h2>
          </div>
          <button
            className="hamburger font-bold text-xl absolute right-4"
            onClick={toggleNav}
          >
            &#9776;
          </button>
          <ul className="nav--items flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between px-3 py-2">
            <li>
              <button onClick={toggleNav} className="hover:text-secondary transition-all duration-300">
                <Link to={"/"}>Home</Link>
              </button>
            </li>
            <li>
              <button className="flex gap-2 items-center hover:text-secondary transition-all duration-300">
                Services <RxCaretDown className="text-2xl" />
              </button>
              <div className="service--mega--nav bg-accent text-secondary py-2 px-10 text-left">
                <ul>
                  <li>
                    <button>
                      <Link to={"/mobile-app-dev"}>Mobile App Development</Link>
                    </button>
                  </li>
                  <li>
                    <button>
                      <Link to={"/website-development"}>
                        Website Development
                      </Link>
                    </button>
                  </li>
                  <li>
                    <button>
                      <Link to={"/desktop-app-dev"}>
                        Desktop App Development
                      </Link>
                    </button>
                  </li>
                  <li>
                    <button>
                      <Link to={"/mentorship"}>Mentorship</Link>
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button onClick={toggleNav} className="hover:text-secondary transition-all duration-300">
                <Link to={"/about"}>About</Link>
              </button>
            </li>
            <li>
              <button onClick={toggleNav} className="hover:text-secondary transition-all duration-300">
                <Link to={"/events"}>Events</Link>
              </button>
            </li>
            <li>
              <button onClick={toggleNav} className="hover:text-secondary transition-all duration-300">
                <Link to={"/contact"}>Contact Us</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
