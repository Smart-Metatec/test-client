import { NavLink } from "react-router-dom"
import { NavComponent } from "../styled/Nav.styled"
import { useSelector } from "react-redux"
import { FaRegUserCircle } from "react-icons/fa"


const Nav = () => {
        
    const { user } = useSelector((state) => state.user)

    return (
        <NavComponent>
            <section>
                <FaRegUserCircle />
                <h4>{user.display_name ? user.display_name : `${user.first_name} ${user.last_name}`}</h4>
            </section>
            <ul>
                <li>
                    <NavLink to="products" >Products</NavLink>
                </li>
                <li>
                    <NavLink to="account" >Account</NavLink>
                </li>
                <li>
                    <NavLink to="support" >Support</NavLink>
                </li>
                {/* <li>
                    <Link to="licences" >Licences</Link>
                </li> */}
            </ul>
        </NavComponent>
    )
}

export default Nav