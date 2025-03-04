import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <ul>
        <li><NavLink className={({isActive})=>isActive?'active':'pending'}
           to='/'>HomePage</NavLink></li>
              <li><NavLink className={({isActive})=>isActive?'active':'pending'} 
              to='/product'>product</NavLink></li>
        </ul>
    </div>
  )
}

export default Menu