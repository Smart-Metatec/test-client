import { useRef, useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import axios from '../config/axios'

import { CreateAccountPage } from "../styled/routes/CreateAccount.styled"
import { checkEmail, checkName } from '../utils/checkData'

const CreateAccount = () => {
    const [errors, setErrors] = useState({first: "", last: "", email: "", global: ""})
    const [userId, setUserId] = useState()
    const [requestUrl, setRequestUrl] = useState(null)

    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()

    const submit = async () => {
        let localErrors = {first: "", last: "", email: "", global: ""}

        if(!checkName(firstNameRef.current.value)) localErrors.first = "Please enter a valid first name."
        if(!checkName(lastNameRef.current.value)) localErrors.last = "Please enter a valid first name."   
        if(!checkEmail(emailRef.current.value)) localErrors.email = "Please enter a valid email address."
    
        if(!localErrors.first && !localErrors.last && !localErrors.email){
            const payload = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value
            }
            const createRequest = await axios.post("/api/users/create", payload)
            if(!createRequest.data.pass) return setErrors({...errors, global: "The user already exists"})
            setUserId(createRequest.data.userId)

        }
        setErrors(localErrors)


    }

    const resend = async () => {
        const resendRequest = await axios.post("api/mail/createUser", {userId})
        
    }

    useEffect(() => {

    }, [])
    return (
        <CreateAccountPage>
            <div>
                <img src="./images/smt-logo-full.png" alt="" />  
            </div>

           {!userId ? <form >
                <div>
                    <label htmlFor="">First Name <span className='error'>{errors.first}</span></label>
                    <input type="text" ref={firstNameRef}/>
                </div>
                <div>
                    <label htmlFor="">Last Name <span className='error'>{errors.last}</span></label>
                    <input type="text" ref={lastNameRef}/>
                </div>
                <div>
                    <label htmlFor="">Email <span className='error'>{errors.email}</span></label>
                    <input type="text" ref={emailRef}/>
                </div>
                <div>
                    <button type="button" onClick={() => submit()}>Submit</button>
                </div>
            </form> : 
            
            <div className='complete'>
                <h1>You did it!!</h1>
                <p>a mail will be sent to your mailbox. In the mail you will find further instructions on how to activate your account.</p>
                <div>
                    <button type='button' onClick={() => resend()}>Resend</button>
                </div>
            </div>}
            <p>Already have an account? <Link to={"../login"}>Login</Link></p>
        </CreateAccountPage>
    )
}

export default CreateAccount