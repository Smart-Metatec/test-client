import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
const Header = () => {
  return (
    <HeaderStyle>
        <NavLink to="">
            <img src="../../images/logo.png" alt="" />
        </NavLink>

        <nav>
            <ul>
                <li>
                  <NavLink to="users" className={({isActive}) => isActive ? "active" : ""}>Users</NavLink>
                </li>
                <li>
                  <NavLink to="products" className={({isActive}) => isActive ? "active" : ""}>Products</NavLink>
                </li>
                <li>
                  <NavLink to="tickets" className={({isActive}) => isActive ? "active": ""}>Tickets</NavLink>
                </li>
            </ul>
        </nav>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
    background-color: ${({theme}) => theme.colors.darkBlue};
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 150px;
    }
    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        width: 20vw;
        li {
            a {
                text-decoration: none;
                color: white;
                font-size: 1.5em;
            }
        }
    }

    .active {
      color: ${({theme}) => theme.colors.green};
    }
`


export default Header