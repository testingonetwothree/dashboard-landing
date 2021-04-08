import React from 'react'
import './styles.css'
import {HeaderSearch} from "./HeaderSearch";
import {HeaderAvatar} from "./HeaderAvatar";
import {HeaderNotification} from "./HeaderNotification";


export const HeaderContent = () => (
  <div className="header__content">
    <HeaderSearch/>
    <HeaderNotification/>
    <div className="header__border"/>
    <HeaderAvatar/>
  </div>
)
