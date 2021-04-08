import React from 'react'
import './styles.css'

import {SideBar} from "../SideBar";
import {MainContent} from "../MainContent";

export const GeneralWrapper = () => (
  <div className='general-background'>
    <div className='general-wrapper'>
      <SideBar/>
      <MainContent/>
    </div>
  </div>
)
