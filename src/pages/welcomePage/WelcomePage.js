import React from 'react'
import s from './WelcomePage.module.css'
import {Link} from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className={s.WelcomePage}>
      <h1>Welcome to THE GAME</h1>
      <Link to='/game' > go to GAME!</Link>
    </div>
  )
}

export default WelcomePage