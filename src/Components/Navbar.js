import React from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";




export default function Navbar(params) {
  const handleClick = () => {
    params.setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="navbar">
        <div className="menu-gmail">
          <BsList onClick={handleClick} className="menu-button" />
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r4.png"
            alt="gmail icon"
            className="gmail-img"
          />
        </div>

        <div className="searchbar-item">
          <AiOutlineSearch className="searchbar-search" />
          <input
            type="search"
            placeholder="Search in mail"
            className="searchbar"
          />
          <VscSettings className="searchbar-setting" />
        </div>

        <div className="top-right-content">
          <div className="tooltip">
            <BsQuestionCircle className="top-right-content-icon" />
            <span className="tooltip-text">Support</span>
          </div>
          <div className="tooltip">
          
            <IoSettingsOutline className="top-right-content-icon" />
            <span className="tooltip-text">Settings</span>
          </div>
          <div className="tooltip">
            <TbGridDots className="top-right-content-icon" />
            <span className="tooltip-text">Google Apps</span>
          </div>
          <div className="tooltip">
            <CgProfile className="top-right-content-icon" />
            <span className="tooltip-text">Gmail Account</span>
          </div>
        </div>
      </div>
    </>
  );
}
