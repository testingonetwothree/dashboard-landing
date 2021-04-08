import React from "react";
import './styles.css'
import {add} from "../../../assets/icons/add";

export const SideBarFooter = () => (
  <div className="side-bar__footer">
    <div className="side-bar__footer_icon">{add}</div>
    <div className="side-bar__footer_text">New Post</div>
  </div>

)