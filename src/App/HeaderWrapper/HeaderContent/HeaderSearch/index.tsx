import React from "react";
import './styles.css'
import {search} from "../../../../assets/icons/search";

export const HeaderSearch = () => (
  <div className="header__searchbox">
    <div className="header__searchbox_icon">{search}</div>
    <input
      className="header__searchbox_text"
      placeholder="Search everything"

    />
  </div>
)