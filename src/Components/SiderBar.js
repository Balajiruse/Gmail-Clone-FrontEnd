import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import {
  AiOutlineStar,
  AiOutlineClockCircle,
  AiOutlineFile,
} from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { MdScheduleSend } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { RiSpamLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SideBar(props) {
  const [shows, setShows] = useState(false);
  const handleShow = () => {
    setShows((prev) => !prev);
  };
  
  const navigate = useNavigate();

  return (
    <>
      <div>
        {props.open ? (
          <div className="sidebar">
            <div>
              <button
                className="compose-button"
                onClick={() => props.setShow(true)}
              >
                <BiPencil className="pencil-icon" />
                <label className="compose-text">Compose</label>
              </button>
            </div>
            <div className="sidebar-menu">
              <li className="sidebar-menu-buttons">
                <CgInbox className="sider-menu-icon" />
                <label className="sidebar-menu-label">Inbox</label>
              
               
                <span className="tooltip-texts">Inbox</span>
              </li>
              <li className="sidebar-menu-buttons">
                <AiOutlineStar className="sider-menu-icon" />
                <label className="sidebar-menu-label">Starred</label>
                <span className="tooltip-texts">Starred</span>
              </li>
              <li className="sidebar-menu-buttons">
                <AiOutlineClockCircle className="sider-menu-icon" />
                <label className="sidebar-menu-label">Snoozed</label>
                <span className="tooltip-texts">Snoozed</span>
              </li>
              <li className="sidebar-menu-buttons">
                <IoSendSharp className="sider-menu-icon" />
                <label className="sidebar-menu-label">Sent</label>
                <span className="tooltip-texts">Sent</span>
              </li>
              <li className="sidebar-menu-buttons">
                <AiOutlineFile className="sider-menu-icon" />
                <label className="sidebar-menu-label">Draft</label>
                <span className="tooltip-texts">Draft</span>
              </li>
              <li className="sidebar-menu-buttons" onClick={handleShow}>
                <IoIosArrowDown className="sider-menu-icon" />
                <label className="sidebar-menu-label">More</label>
                <span className="tooltip-texts">More</span>
              </li>
              {shows ? (
                <div>
                  <li className="sidebar-menu-buttons">
                    <FaAngleDoubleRight className="sider-menu-icon" />
                    <label className="sidebar-menu-label">Important</label>
                    <span className="tooltip-texts">Important</span>
                  </li>
                  <li className="sidebar-menu-buttons">
                    <BsChatLeftText className="sider-menu-icon" />
                    <label className="sidebar-menu-label">Chats</label>
                    <span className="tooltip-texts">Chats</span>
                  </li>
                  <li className="sidebar-menu-buttons">
                    <MdScheduleSend className="sider-menu-icon" />
                    <label className="sidebar-menu-label">Scheduled</label>
                    <span className="tooltip-texts">Scheduled</span>
                  </li>
                  <li className="sidebar-menu-buttons">
                    <HiOutlineMail className="sider-menu-icon" />
                    <label className="sidebar-menu-label">All Mail</label>
                    <span className="tooltip-texts">All Mail</span>
                  </li>
                  <li className="sidebar-menu-buttons">
                    <RiSpamLine className="sider-menu-icon" />
                    <label className="sidebar-menu-label">Spam</label>
                    <span className="tooltip-texts">Spam</span>
                  </li>
                  <li className="sidebar-menu-buttons">
                    <RiDeleteBin6Line className="sider-menu-icon" />
                    <label className="sidebar-menu-label">Bin</label>
                    <span className="tooltip-texts">Bin</span>
                  </li>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="hidden-icons">
            <li className="new-pencil-icon-container">
              <BiPencil className="new-pencil-icon" />
            </li>
            <li>
              <CgInbox className="new-sider-menu-icon" />
            </li>
            <li>
              <AiOutlineStar className="new-sider-menu-icon" />
            </li>
            <li>
              <AiOutlineClockCircle className="new-sider-menu-icon" />
            </li>
            <li>
              <IoSendSharp className="new-sider-menu-icon" />
            </li>
            <li>
              <AiOutlineFile className="new-sider-menu-icon" />
            </li>
            <li>
              <IoIosArrowDown className="new-sider-menu-icon" />
            </li>
          </div>
        )}
      </div>
    </>
  );
}

export default SideBar;
