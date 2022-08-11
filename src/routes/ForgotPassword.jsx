import { useState, useRef } from "react"
import { useNavigate } from "react-router"
// import axios from "axios"

import { ForgotPage } from "../styled/ForgotPassword.styled"
import axios from "../config/axios"

const ForgotPassword = () => {

    const navigate = useNavigate()

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")
    const emailRef = useRef()

    const submit = async () => {
        let emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

        setError("")
        if(!emailRegEx.test(emailRef.current.value)) return setError("Please enter a valid email address")
        axios.post("api/users/forgotpassword", {email: emailRef.current.value})
        setSubmitted(true)

    }
    return (
        <ForgotPage>
            <img src="../images/smt-logo-full.png" alt="" />
            {!submitted && <form>
                <div>
                    <label>Please enter your email address.</label>
                    <input type="text" ref={emailRef}/>
                </div>
                <div>
                    <button type="button" onClick={() => submit()}>Send Request</button>
                </div>
            </form>}
            {submitted && 
            <section>
                <h1>If You are a user you will receive a mail with further instructions.</h1>
                <button className="login" onClick={() => navigate("../login")}>Login</button>
            </section>
            }
            <div className="error">{error}</div>
        </ForgotPage>
    )
}

export default ForgotPassword