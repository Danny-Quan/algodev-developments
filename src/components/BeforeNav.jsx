import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function BeforeNav() {
  return (
    <div className="bg-primary/80">
      <div className="nav--before container flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center">
        <ul className=" nav--before--contacts ">
          <li className="text-secondary flex gap-2 items-center">
            <FaPhone /> +233 (0) 506 831 849
          </li>
          <li className="text-secondary flex items-center gap-2">
            <FaWhatsapp />
            +233 (0) 545 143 000
          </li>
        </ul>
        <a
          href="mailto:algodevdevelopments@gmail.com"
          className="text-secondary flex gap-2 items-center"
        >
          <FaEnvelope />
          algodevdevelopments@gmail.com
        </a>
      </div>
    </div>
  );
}

export default BeforeNav;
