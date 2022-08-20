import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="text-center text-2xl mt-10 ">
      <ul className="permalinks pl-0">
        <li>
          <div className="">
            <a
              href="#"
              className="text-purple-500 no-underline hover:text-purple-300"
            >
              Home
            </a>
          </div>
        </li>
        <li>
          <a
            href="#projects"
            className=" text-purple-500 no-underline hover:text-purple-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#services"
            className=" text-purple-500 no-underline hover:text-purple-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className=" text-purple-500 no-underline hover:text-purple-300"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Talha Solutions. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
