import React, {useState} from "react";
import './styles.css'
import {chart, home_select, documents, logout, message, post, settings, user} from "../../../assets/icons/menu-buttons";


const menuArray = [
  {
    icon: home_select,
    header: 'Dashboard',
    focus: true,
  },
  {
    icon: chart,
    header: 'Chats'
  },
  {
    icon: documents,
    header: 'Documents'
  },
  {
    icon: post,
    header: 'Blog'
  },
  {
    icon: message,
    header: 'Message'
  },
  {
    icon: user,
    header: 'Users'
  },
  {
    icon: settings,
    header: 'Settings'
  },
  {
    icon: logout,
    header: 'Log Out'
  },
]

export const SideBarMenu = () => {
  const [focus, setFocus] = useState(0)

  return (
    <div className="side-bar__menu">
      <>
        {menuArray.map((row, i) =>
          <button className={focus === i ? "side-bar__menu_row-focus" : "side-bar__menu_row"} onClick={() => setFocus(i)}>
            <span className="side-bar__menu_icon">{row.icon}</span>
            <span className="side-bar__menu_row-text">{row.header}</span>
          </button>
        )}
      </>
    </div>

  )
}