import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
// import axios from 'axios'


import { HeaderComponent } from '../styled/Header.styled'
import axios from '../config/axios'

const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    try{
      const request = axios.post("/api/users/logout", {})
      if(request.data.pass){
        navigate("/login")
      }
    } catch (e){
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
            <a href="https://www.smartmetatec.com" target="_blank">Home</a>
          </li>
          <li>
            <a href="https://www.smartmetatec.com/products" target="_blank">Our Products</a>
          </li>
        </ul>
        <button type='button' onClick={() => logout()}>Logout</button>
      </nav>
    </HeaderComponent>
  )
}

export default Header