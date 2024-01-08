import React, { useState } from "react";
import { TbArrowsDiagonal } from "react-icons/tb";
import { MdMinimize } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import Button from '@mui/material/Button';
import "./Css/Compose.css"
import { Api } from "./Api";


let initialValue = {
  name: "",
  subject: "",
  mail: "",
};

function Compose(props) {
  const [data, setData] = useState(initialValue);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        `${Api}/gmail_data`,
        JSON.stringify(data),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => {
        setData(initialValue);
      });
    props.setShow(false);
  };

  return (
    <>
      {props.show ? (
        <div className="compose-main">
          <div className="compose-flex-item">
            <div className="compose-title">
              <label>New Message</label>
            </div>

            <div>
              <label className="TbArrowsDiagonal">
                <TbArrowsDiagonal />
              </label>
              <label className="MdMinimize">
                <MdMinimize />
              </label>
              <label
                onClick={() => {
                  props.setShow(false);
                }}
                className="IoClose"
              >
                <IoClose />
              </label>
            </div>
          </div>

          <div className="compose-from-to">

            <input
             type="text"
             onChange={handleChange}
             placeholder="To"
             name="name"
             className="compose-text-to"
            />
            
            <hr />

            <input
              type="text"
              onChange={handleChange}
              placeholder="Subject"
              name="subject"
              className="compose-text-subject"
            />
            <hr />

            <textarea
              onChange={handleChange}
              name="mail"
              className="compose-text-mail"
            />
            <br />

            <Button variant="contained" endIcon={ <IoMdArrowDropdown /> }  onClick={handleSubmit} className="compose-send-button">
                  Send
                 </Button>
            
            

          </div>
        </div>
      ) : null}
    </>
  );
}

export default Compose;
