import React from 'react'
import './styles.css'
import {HeaderWrapper} from "../HeaderWrapper";
import {MainChart} from "./MainChart";
import {MainGraph} from "./MainGraph";
import {MainPosts} from "./MainPosts";


export const MainContent = () => (
  <div className="main-content">
    <HeaderWrapper />
    <MainChart />
    <MainGraph />
    <MainPosts />
  </div>
)
