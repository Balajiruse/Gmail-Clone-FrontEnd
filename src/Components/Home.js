import { useState } from "react";
import Tabss from "./Tabs";
import Navbar from "./Navbar";
import SideBar from "./SiderBar";
import Compose from "./Compose";
import MailBox from "./MailBox";


function Home() {
  const [selectedmail, setSelectedmail] = useState(null);

  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar setOpen={setOpen} />
      <div className="flexitem">
        <SideBar open={open} setShow={setShow} />
        {selectedmail == null ? (
          <Tabss setSelectedmail={setSelectedmail} />
        ) : (
          <MailBox
            selectedmail={selectedmail}
            setSelectedmail={setSelectedmail}
          />
        )}
        <Compose show={show} setShow={setShow} />
      </div>
    </>
  );
}

export default Home;
