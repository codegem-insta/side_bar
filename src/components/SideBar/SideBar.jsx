import { useState } from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import close from "./close.svg";

import style from "./SideBar.module.css";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prevState) => !prevState);
  const sideBarClass = isOpen ? `${style.SideBar} ${style.Active}` : style.SideBar;

  return (
    <>
      <Hamburger onClick={toggleSidebar} />

      <div className={sideBarClass}>
        
        <div className={style.Close} onClick={toggleSidebar}>
          <img src={close} alt="close" />
        </div>

        <div>Home</div>
        <div>Messages</div>
        <div>Log out</div>

      </div>
    </>
  );
}

export default SideBar;
