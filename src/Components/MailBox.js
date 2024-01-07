import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { BiArchiveIn } from "react-icons/bi";
import { RiSpamLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatLeftText } from "react-icons/bs";
import { MdScheduleSend } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import avtar from "../assets/avtar (1).png";


function MailBox({ selectedmail, setSelectedmail }) {
  const navigate = useNavigate();

  return (
    <div className="main-mailbox">
      <div className="mailbox-top-icons">
        <div className="sidebar-menu-buttonss">
          <IoArrowBack
            className="sider-menu-iconn"
            onClick={() => {
              setSelectedmail(null);
            }}
          />
          <span className="tooltip-texts">Back</span>
        </div>
        <div className="sidebar-menu-buttonss">
          <BiArchiveIn className="sider-menu-iconn" />
          <span className="tooltip-texts">Archive</span>
        </div>
        <div className="sidebar-menu-buttonss">
          <RiSpamLine className="sider-menu-iconn" />
          <span className="tooltip-texts">Report Spam</span>
        </div>
        <div className="sidebar-menu-buttonss">
          <RiDeleteBin6Line className="sider-menu-iconn" />
          <span className="tooltip-texts">Bin</span>
        </div>
        <div className="sidebar-menu-buttonss">
          <HiOutlineMail className="sider-menu-iconn" />
          <span className="tooltip-texts">Mark as unread</span>
        </div>
        <div className="sidebar-menu-buttonss">
          <BsChatLeftText className="sider-menu-iconn" />
          <span className="tooltip-texts">Chats</span>
        </div>
        <div className="sidebar-menu-buttonss">
          <MdScheduleSend className="sider-menu-iconn" />
          <span className="tooltip-texts">Scheduled</span>
        </div>
        <div className="sidebar-menu-buttonss">
          <AiOutlineClockCircle className="sider-menu-iconn" />
          <span className="tooltip-texts">Snoozed</span>
        </div>
      </div>
      <div>
        <label className="mailbox-subject">{selectedmail.subject}</label>
      </div>
      <div className="mailbox-img-name">
        <img src={avtar} alt="pro pic" className="avtarpics" />
        <label className="mailbox-name">
          <strong>{selectedmail.name}</strong>
          <br />
          to me
        </label>
      </div>
      <div>
        <label className="mailbox-mail">{selectedmail.mail}</label>
      </div>
      <div className="main-mailbox-button">
        <button className="mailbox-button">
          <BsArrow90DegLeft />
          Reply
        </button>
        <button className="mailbox-button">
          <BsArrow90DegRight />
          Foward
        </button>
      </div>
    </div>
  );
}

export default MailBox;
