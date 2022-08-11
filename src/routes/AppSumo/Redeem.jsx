// import axios from "axios"
import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"

// import { AppSumoPage } from '../../styled/AppSumo.styled'
import { RedeemPage } from "../../styled/AppSumo/Redeem.styled"
import axios from "../../config/axios"

const Redeem = () => {
  // Indexes for the errors
  const FIRSTNAME = 0
  const LASTNAME = 1
  const EMAIL = 2
  const CODE = 3

  // Element references to get the data from the input
  const codeRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()

  const navigate = useNavigate()

  // success state if the submit was successfull
  const [submitSuccess, setSubmitSuccess] = useState(false)
  // errors state array for the errors
  const [errors, setErrors] = useState([])
  // get user id
  const [user, setUser] = useState(null)

  // verify the data before submitting it
  const verify = async ({code, firstName, lastName, email}) => {
    // local errorArray to keep track of errors without changing state
    let errorArray = []

    // Regex for testing
    let firstNameRegEx = /^[a-zA-Z\s]*$/gi
    let lastNameRegEx = /^[a-zA-Z\s]*$/gi
    let emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    
    // clear previous errors
    setErrors([])
   
    // Check if firstname exists and is valid
    if(!firstName){
      errorArray[FIRSTNAME] = "First name cannot be empty."
      setErrors(errorArray)
    } else if(!firstNameRegEx.test(firstName)){
      errorArray[FIRSTNAME] = "First name is not valid."
      setErrors(errorArray)
    }

    // Check if lastname exists and is valid
    if(!lastName){
      errorArray[LASTNAME] = "Last name cannot be empty."
      setErrors(errorArray)
    } else if(!lastNameRegEx.test(lastName)){
          errorArray[LASTNAME] = "Last name is not valid."
          setErrors(errorArray)
      }


    // Check if email exists and is valid
    if(!email){
      errorArray[EMAIL] = "Email cannot be empty."
      setErrors(errorArray)
    } else if(!emailRegEx.test(email)){
      errorArray[EMAIL] = "Email is not valid."
      setErrors(errorArray)
    }

    // Check if code 
    if(!code){
      errorArray[CODE] = "AppSumo Code cannot be empty."
      setErrors(errorArray)

    }
    if(code && errorArray.length === 0){

      let validCode = await axios.post("api/verify/appsumoCode", {code})
      let pass = validCode.data.pass

      if(!pass){
        errorArray[CODE] = "Please provide a valid AppSumo Code."
        setErrors(errorArray)
        return false

      } else if(pass && errorArray.length === 0){
          return true
      }
     

    }

  }

  const submit = async () => {
    let payload = {
      code: codeRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value
    }

    let validData = await verify(payload)
    console.log("This is the valid data verification", validData)
    if(validData){
      try {
        const check = await axios.post("api/appsumo/redeem", payload)
        const data = check.data
        console.log("This is the return data from the server after the user is created.", data)
        console.log(check)
        if(data.pass){
          setSubmitSuccess(true)
          setUser(data.user_id)
        }
      } catch (e){
        if(e?.response?.status === 301){
          navigate("../login")
        }
      }
      
    }

  }

  const Resend = async () => {
    let req = await axios.post("api/mail/signUp", {userId: user})
    console.log(req.data)
  }

  useEffect(() => {
    // console.log(errors)
  }, [submitSuccess, errors])

 
  return (
    <RedeemPage>
      
        <header>
            <img id='smt-logo' src="../images/smt-logo-name.png" alt="" />
            <span className='separator'>&amp;</span>
            <img id='appsumo-logo' src="../images/appsumo-logo-white.png" alt="" />
        </header>

        { !submitSuccess && 
        
        <section>
          <h4>Hello Sumo-lings!</h4>
          <p>
            Please share your AppSumo email and AppSumo redemption code to claim your amazing deal.
          </p>
          <p>
            After your you will be prompted to create your free account where you can access all our amazing products and services.
          </p>
          <p>Thank you for your support!</p>
        </section>
        
        }
        { submitSuccess && 
          <section className="success">
            <h4>Thanks for your support</h4>
            <p>
              You will receive an email with a link to create your account where you can download your newly purchased product.
            </p>
            <p>
              If you did not receive an email please click the resend button or ask our support team.
            </p>
            <p>We hope you enjoy our great products and services and we love hearing from you!</p>
          </section>
        }

        { !submitSuccess && 
        <form>
            <div className="form-field">
              <label htmlFor="first-name">First Name {errors[FIRSTNAME] && <span className="error-message">{errors[FIRSTNAME]}</span>}</label>
              <input type="text" ref={firstNameRef} className={errors[FIRSTNAME] ? "error" : "field"}/>
              
            </div>

            <div className="form-field">
              <label htmlFor="last-name">Last Name {errors[LASTNAME] && <span className="error-message">{errors[LASTNAME]}</span>}</label>
              <input type="text" ref={lastNameRef} className={errors[LASTNAME] ? "error" : "field"}/>
              
            </div>

            <div className="form-field">
              <label htmlFor="email">Email  {errors[EMAIL] && <span className="error-message">{errors[EMAIL]}</span>}</label>
              <input type="text" ref={emailRef} className={errors[EMAIL] ? "error" : "field"}/>
             
            </div>

            <div className="form-field">
              <label htmlFor="appsumo-code">AppSumo Code  {errors[CODE] && <span className="error-message">{errors[CODE]}</span>}</label>
              <input type="text" ref={codeRef} className={errors[CODE] ? "error" : "field"}/>
             
            </div>

            <div className='form-field'>
              <button type="button" onClick={() => submit()}>Let's Go</button>
            </div>
            <div className="login-link">Already have an account? <Link to="/appsumo/login">Go Here</Link></div>

        </form>}

        { submitSuccess && 
          <div className="resend">
            <button onClick={() => Resend()}>Resend Email</button>
          </div>
        }
        
    </RedeemPage>
  )
}

export default Redeem