import { useRef, useState } from "react"
import {FaEyeSlash, FaEye} from "react-icons/fa"
// import axios from "axios"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"


import { login } from "../../store/user"
import { setProducts } from "../../store/products"
import { LoginPage } from "../../styled/Login.styled"
import axios from "../../config/axios"



const AppSumoLogin = () => {
    const EmailRef = useRef()
    const PasswordRef = useRef()

    const navigate = useNavigate()

    const [passwordVisibility, setPasswordVisibility] = useState()
    const [error, setError] = useState("")

    let user = useSelector(state => state.user)
    let dispatch = useDispatch()

    const updatePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
        PasswordRef.current.type = passwordVisibility ? "password" : "text"
    
    }

    const loginHandler = async () => {
        const payload = {
            email: EmailRef.current.value,
            password: PasswordRef.current.value
        }
        try {
            const login_request = await axios.post("users/login", payload)
            const response = login_request.data
            if(response.pass){
                try {
                    const request = await axios.post("users/account/get", null)
                    if(request.data){
                        dispatch(login(request.data.user))
                        dispatch(setProducts(request.data.products))
                    }
                } catch (e) {
                    console.log(e)
                }
                

                navigate("../upgrade")
            }
        } catch (e) {
            console.log(e)
            setError(e?.response?.data?.message)
        }
        
    }
  return (
    <LoginPage>
                <div>
                    <img src="../images/smt-logo-full.png" alt="" />     
                </div>
                <section>
                    <p>You already have an account.</p>
                    <p>Please Log into your account to redeem your product.</p>
                </section>
                <form >

                    <div className="form-field">
                        <label >Email</label>
                        <input ref={EmailRef} type="email" className="field"/>
                    </div>

                    <div className="form-field">
                        <label >Password </label>
                        <span>
                            <input ref={PasswordRef} type="password" className="field"/>
                            <div className="visible" id="password" onClick={() => updatePasswordVisibility()}>
                                {passwordVisibility ? <FaEye  /> : <FaEyeSlash />}
                            </div>
                        </span>
                        
                    </div>
                    <div className="form-field">
                        <button type='button' onClick={() => loginHandler()}>Login</button>
                    </div>

                </form>
                <div className="error">{error}</div>
            
        </LoginPage>
  )
}

export default AppSumoLogin