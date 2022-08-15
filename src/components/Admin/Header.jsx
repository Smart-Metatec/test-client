import React from 'react'
import { NavLink } from "react-router-dom"
import {HeaderStyle} from "../../styled/Admin/Header.styled"

const Header = () => {
  return (
    <HeaderStyle>
        <NavLink to="">
            <img src="../images/logo.png" alt="" />
        </NavLink>

        <nav>
            <ul>
                <li><NavLink to="users">Users</NavLink></li>
                <li><NavLink to="products">Products</NavLink></li>
                <li><NavLink to="tickets">Tickets</NavLink></li>
            </ul>
        </nav>
    </HeaderStyle>
  )
}

export default Header