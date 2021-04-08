import React from 'react'
import './styles.css'


const userArray = ['Denis', 'Anton', 'Seryoga', 'Vasili', 'Egor', 'Georgy', 'Nastya', 'Roman', 'Anatoly', 'Kolya']

const username = userArray[Math.floor(Math.random() * 10)];


export const HeaderHeadline = () => (
  <div className='header__headline'>
    <div className='header__headline_title'>Dashboard</div>
    <div className='header__headline_subtitle'>Hi {username}, welcome back</div>
  </div>
)
