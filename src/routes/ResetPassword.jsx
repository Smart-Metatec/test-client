import { useSearchParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router"
// import axios from "axios"
import { FaEye, FaEyeSlash} from "react-icons/fa"

import { ResetPasswordPage } from "../styled/ResetPassword.styled"
import axios from "../config/axios"

const ResetPassword = () => {

    const navigate = useNavigate()

    const [password1Visible, setPassword1Visible] = useState(false)
    const [password2Visible, setPassword2Visible] = useState(false)
    const [errors, setErrors] = useState("")

    const [searchParams] = useSearchParams()

    

    const password1Ref = useRef()
    const password2Ref = useRef()

    const updatePasswordVisibility = (password) => {
        if(password === 1){
            setPassword1Visible(!password1Visible)
            password1Ref.current.type = password1Visible ? "password" : "text"
        }
        else { 
            setPassword2Visible(!password2Visible)
            password2Ref.current.type = password2Visible ? "password" : "text"
        }
    }

    const verify = (password1, password2) => {
        let passwordLowerRegEx = /[a-z]+/g
        let passwordUpperRegEx = /[A-Z]+/g
        let passwordNumericRegEx = /[0-9]+/g
        let passwordAlpha = /[^0-9a-z]+/gi
        let error = ""
        setErrors(error)

        if(!password1){
            error = 'Please Provide a password.'
            setErrors(error)
        } else if(password1.length < 8 || password1.length > 16){
            error = "password must be between 8 and 16 characters long."
            setErrors(error)
        } else if(!passwordLowerRegEx.test(password1)){
            error = "password must contain lowercase and uppercase letters."
            setErrors(error)
        } else if(!passwordUpperRegEx.test(password1)){
            error = "password must contain lowercase and uppercase letters."
            setErrors(error)
        } else if(!passwordNumericRegEx.test(password1)){
            error = "password must contain atleast one number"
            setErrors(error)
        } else if(!passwordAlpha.test(password1)){
            error = "password must contain atleast one special character"
            setErrors(error)
        }



        if(!password2){
            error = "Please confirm password."
            setErrors(error)
        }

        if(password1 !== password2){
            error = "Passwords don't match."
            setErrors(error)
        }

        if(error.length === 0){
            return true
        } 
        else {
           return false
        }
    }

    const submit = async () => {
        const password1 = password1Ref.current.value
        const password2 = password2Ref.current.value
        const validPasswords = verify(password1, password2)
        const id = searchParams.get("id")

        if(validPasswords){
            
            try {
                const requestReset = await axios.post("/api/users/resetpassword", {id, password: password1 })
                console.log(requestReset.data)
                if(requestReset.data.pass){
                    
                    navigate("../login")
                } 
            } catch (err){
                if(err) {
                    console.error(err)
                    // console.log(err)
                    setErrors("Something went wrong, please contact support.")
                }
            }
        }
    }

    useEffect(() => {

    }, [])
    return (
        <ResetPasswordPage>
            <img src="../images/smt-logo-full.png" alt="" />
            <form>
                <div className="form-field">
                    <label htmlFor="">Password</label>
                    <div>
                        <input type="password" ref={password1Ref}/>
                        <span onClick={() => updatePasswordVisibility(1)}>{password1Visible ? <FaEye/> : <FaEyeSlash/>}</span>
                    </div>
                    
                </div>
                <div className="form-field">
                    <label htmlFor="">Confirm Password</label>
                    <div>
                        <input type="password" ref={password2Ref}/>
                        <span onClick={() => updatePasswordVisibility(2)}>{password2Visible ? <FaEye/> : <FaEyeSlash/>}</span>
                    </div>
                    
                </div>
                <div className="form-field">
                    <button type="button" onClick={() => submit()}>Reset</button>
                </div>
            </form>
            <div className="error">{errors}</div>
        </ResetPasswordPage>
    )
}

export default ResetPassword