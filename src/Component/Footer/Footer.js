import React from "react";
import Logo from "./Img/logo.png";
import "./Footer.css";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row m-5 px-5 p-3">
        <div className="col-3">
          <div className="mx-3">
            <img className="w-100 py-2" src={Logo} alt="" />
            <p className="h6 py-3">Parking System with premium service</p>
            <div className="con-List d-flex">
              <ul className="d-flex justify-content-start gap-4">
                <li>
                  <FaGoogle />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
            <div className="con-List d-flex">
              <ul className="d-flex justify-content-start gap-4">
                <li>
                  <FaGoogle />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="p-3 ">
            <div className="h5">Plan</div>
            <ul className="mt-4 pt-1">
              <li className="h6">Regular</li>
              <li className="h6">Premium</li>
              <li className="h6">Golden</li>
              <li className="h6">Luxury</li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="p-3 ">
            <div className="h5">Services</div>
            <ul className="mt-4 pt-1">
              <li className="h6">pacious Parking</li>
              <li className="h6">CCT</li>
              <li className="h6">Sefty</li>
              <li className="h6">Cleaning Services</li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="p-3 ">
            <div className="h5">Company</div>
            <ul className="mt-4 pt-1">
              <li className="h6">About</li>
              <li className="h6">Terms</li>
              <li className="h6">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="p-3 ">
            <div className="h5">More</div>
            <ul className="mt-4 pt-1">
              <li className="h6">Documentation</li>
              <li className="h6">License</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
