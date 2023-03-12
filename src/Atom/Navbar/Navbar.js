import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Navbar.module.css"
function Navbar() {
  return (
    <div className={style.main}>
      <NavLink className={style.link} to="/">Home</NavLink>
      <NavLink className={style.link} to="/favourite">Go To Favorite</NavLink>
    </div>
  )
}

export default Navbar
