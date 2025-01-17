import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
    <ul>
      <li><NavLink className={({isActive})=>isActive?'active':'pending'} to='/'>Home</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'active':'pending'} to='/product'>Product Card</NavLink></li>
    </ul>
    </div>
  )
}

export default Menu