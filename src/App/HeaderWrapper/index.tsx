import React from 'react'
import './styles.css'
import {HeaderHeadline} from "./HeaderHeadline";
import {HeaderContent} from "./HeaderContent";


export const HeaderWrapper = () => (
    <div className="header-wrapper">
      <HeaderHeadline />
      <HeaderContent />
    </div>
)
