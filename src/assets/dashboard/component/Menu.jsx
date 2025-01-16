import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <ul>
            <li><NavLink to='/home'>home</NavLink></li>
            <li><NavLink to='/product'>product</NavLink></li>
        </ul>
    </div>
  )
}

export default Menu