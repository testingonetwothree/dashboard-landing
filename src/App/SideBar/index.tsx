import React from "react";
import './styles.css'
import {SideBarLogo} from "./SideBarHeader";
import {SideBarMenu} from "./SideBarMenu";
import {SideBarFooter} from "./SideBarFooter";


export const SideBar = () => (
  <div className="side-bar">
    <SideBarLogo />
    <SideBarMenu />
    <SideBarFooter />
  </div>

)