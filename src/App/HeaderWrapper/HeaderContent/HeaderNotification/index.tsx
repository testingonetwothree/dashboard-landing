import React from "react";
import './styles.css';
import {notification} from "../../../../assets/icons/notification";

export const HeaderNotification = () => (
  <button className="header__notification">
    {notification}
  </button>
)