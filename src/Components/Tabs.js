import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BsArrowClockwise } from "react-icons/bs";
import { BiDotsVerticalRounded, BiArchiveIn } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { BsTag } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbMailOpened } from "react-icons/tb";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Api } from "./Api";

export default function Tabss({ setSelectedmail }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");
  const [mails, setMails] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    fetch(`${Api}/gmail_data`)
      .then((response) => response.json())
      .then((data) => setMails(data));
  });
  const handleDelete = (name) => {
    axios
      .delete(`${Api}/gmail_data/` + name)
  };

  return (
    <div className="tabs-radius">
      <div className="above-main-tab">
        <div className="checkbox-arrow">
          <input type="checkbox" className="check-box" />
          <IoMdArrowDropdown className="check-arrow" />
          <span className="tooltip-texts">Select</span>
        </div>
        <div>
          <BsArrowClockwise
            className="BsArrowClockwise"
          />
          <span className="tooltip-texts">Refresh</span>
        </div>
        <div>
          <BiDotsVerticalRounded className="BiDotsVerticalRounded" />
          <span className="tooltip-texts">More</span>
        </div>
      </div>
      <Box sx={{ width: "1100px", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <CgInbox className="tabs-icon" />
              <Tab
                sx={{ textTransform: "capitalize", width: "190px" }}
                label="Primary"
                value="1"
              />

              <BsTag className="tabs-icon" />
              <Tab
                sx={{ textTransform: "capitalize", width: "190px" }}
                label="Promotions"
                value="2"
              />

              <FiUsers className="tabs-icon" />
              <Tab
                sx={{ textTransform: "capitalize", width: "190px" }}
                label="Social"
                value="3"
              />
            </TabList>
          </Box>

          <TabPanel value="1">
            <div>
              {mails.map((value) => {
                return (
                  <div className="mail-recived" key={value.name}>
                    <div>
                      <label className="tabs-icon-checkbox">
                        <input type="checkbox" className="tabs-check-box" />
                      </label>
                      <label className="tabs-icons">
                        <AiOutlineStar />
                      </label>
                    </div>
                    <div
                      onClick={() => {
                        setSelectedmail(value);
                      }}
                    >
                      <label className="tabs-name">{value.name}</label>
                      <label className="tabs-subject">{value.subject}-</label>
                      <label className="tabs-mail">{value.mail}</label>
                    </div>
                    <div className="tabs-icon-hide">
                      <label className="tabs-icon">
                        <BiArchiveIn />
                      </label>
                      <label
                        className="tabs-icon"
                        onClick={() => handleDelete(value.name)}
                      >
                        <RiDeleteBin6Line />
                      </label>
                      <label className="tabs-icon">
                        <TbMailOpened />
                      </label>
                      <label className="tabs-icon">
                        <AiOutlineClockCircle />
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabPanel>

          <TabPanel value="2">No Promotion mails available</TabPanel>
          <TabPanel value="3">No Social mails available</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
