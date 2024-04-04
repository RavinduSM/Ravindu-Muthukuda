import React from "react";

import logo from "../assets/RavinduMLogo.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="max-h-16" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com/in/ravindu-muthukudaarachchi-414aaa1ab/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/RavinduSM">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ravindu__m?igsh=ejV5OXptajRjaGg0">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
