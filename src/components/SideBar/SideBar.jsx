import { useState } from "react";
import { Hamburger } from "../Hamburger/Hamburger";

import style from "./SideBar.module.css";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <Hamburger onClick={toggleSidebar} />

      <div className={isOpen ? `${style.SideBar} ${style.Active}` : style.SideBar}>
        <div className={style.Close} onClick={toggleSidebar}>Close</div>
        <div>Home</div>
        <div>Messages</div>
        <div>Log out</div>
      </div>
    </>
  );
}

export default SideBar;
