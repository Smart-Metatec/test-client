import React from "react"
import { useNavigate } from 'react-router'
// import axios from 'axios'


import { HeaderComponent } from '../styled/Header.styled'
import axios from '../config/axios'
import { AxiosResponse } from 'axios'

const Header = () => {
  const navigate = useNavigate()
  const logout = async () => {
    try{
      console.log("Sending logout request")
      const requestLogout: AxiosResponse<any, any> = await axios.post("api/users/logout", {})
      if(requestLogout.status === 200) navigate("/login")

    } catch (e: any){
      navigate("/login")
    }
  }
  return (
    <HeaderComponent>
      <img src="../images/smt logo 400x200.png" alt="" />
      {/* <img src="./images/SMT Logo 1000x600.png" alt="" /> */}
      <nav>
        <ul>
          <li>
            <a href="https://www.smartmetatec.com" target="_blank" rel="noreferrer">Home</a>
          </li>
          <li>
            <a href="https://www.smartmetatec.com/products" target="_blank" rel="noreferrer">Our Products</a>
          </li>
        </ul>
        <button type='button' onClick={() => logout()}>Logout</button>
      </nav>
    </HeaderComponent>
  )
}

export default Header