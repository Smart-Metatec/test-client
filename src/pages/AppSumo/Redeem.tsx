// import axios from "axios"
import React, { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"

// import { AppSumoPage } from '../../styled/AppSumo.styled'
import { RedeemPage } from "../../styled/AppSumo/Redeem.styled"
import axios from "../../config/axios"

interface RedeemForm {
  firstname: string,
  lastname: string,
  email: string,
  code1: string,
  code2: string,
  code3: string
}

interface CodeInterface {
  valid: boolean,
  message: string
}

interface SubmitData {
  firstName: string,
  lastName: string,
  email: string,
  codes: string[]
}

const RedeemSchema = yup.object().shape({
  firstname: yup.string().required("Please enter your first name."),
  lastname: yup.string().required("Please enter your last name."),
  email: yup.string().required("Please enter your email").email("Please enter a valid email."),
  code1: yup.string().required("Please enter a code"),
  code2: yup.string(),
  code3: yup.string(),
})

const Redeem = () => {

  const navigate = useNavigate()

  // success state if the submit was successfull
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [codeStatus, setCodeStatus] = useState<CodeInterface>({valid: true, message: ""})

  // get user id
  const [user, setUser] = useState(null)

  // verify the data before submitting it
  const verify = async (values: RedeemForm) => {
    const { code1, code2, code3 } = values
    let codeArray: string[] = []

    // check if code 1 & 2 are the same
    const same12 = code2 && code1 === code2
    // check if code 1 & 3 are the same
    const same13 = code3 && code1 === code3
    // check if code 2 & 3 are the same
    const same23 = code3 && code2 && code2 === code3

    // Set the error if two or more codes are the same
    if(same12 || same13 || same23) return setCodeStatus({valid: false, message: "The codes cannot be the same"})

    if(code1) codeArray.push(code1)
    if(code2) codeArray.push(code2)
    if(code3) codeArray.push(code3)
    
    try{
      // validate codes
      let validCode = await axios.post("api/verify/appsumoCode", codeArray)

      if(validCode.status !== 200) return setCodeStatus({valid: false, message: "Something went wrong."})
      
      // everything is fine continue the process
      submit({
        firstName: values.firstname, 
        lastName: values.lastname, 
        email: values.email, 
        codes: validCode.data.codes
      })
    } catch(e: any){
        setCodeStatus({valid: false, message: e.response.data.message})
    }
  }

  const initialValues = (): RedeemForm => {
    const initialData: RedeemForm = {
      firstname: "",
      lastname: "",
      email: "",
      code1: "",
      code2: "",
      code3: ""
    }

    return initialData
  }

  const submit = async (data: SubmitData) => {
    try {
      const redeemRequest = await axios.post("api/appsumo/redeem", data)
      if(redeemRequest.status === 200) setSubmitSuccess(true)
    } 
    catch (e: any) {
      if(e.response.status === 301) navigate("../login")
    }

  }

  const Resend = async () => {
    let req = await axios.post("api/mail/signUp", {userId: user})
  }

  useEffect(() => {
    // console.log(errors)
  }, [submitSuccess])

 
  return (
    <RedeemPage>
      
        <header>
            <img id='smt-logo' src="../images/smt-logo-name.png" alt="" />
            <span className='separator'>&amp;</span>
            <img id='appsumo-logo' src="../images/appsumo-logo-white.png" alt="" />
        </header>

        { !submitSuccess &&
        <>
          <section>
            <h4>Hello Sumo-lings!</h4>
            <p>
              Please share your AppSumo email and AppSumo redemption code to claim your amazing deal.
            </p>
            <p>Thank you for your support!</p>
          </section>
          <Formik
            initialValues={initialValues()}
            onSubmit={verify}
            validationSchema={RedeemSchema}
          >
            {({values, handleChange, handleSubmit}) => (
              <Form>
                <div className="form-field">
                  <div>
                    <label htmlFor="first-name">First Name</label>
                    <ErrorMessage name="firstname" className="error" component="span"/>
                  </div>
                  
                  <Field type="text" name="first_name" className="field" id="first_name" value={values.firstname} onChange={handleChange('firstname')}/>
                  
                </div>

                <div className="form-field">
                  <div>
                    <label htmlFor="last-name">Last Name</label>
                    <ErrorMessage name="lastname" className="error" component="span"/>
                  </div>
                  <Field type="text" name="last_name" className="field" id="last_name" value={values.lastname} onChange={handleChange('lastname')}/>
                </div>

                <div className="form-field">
                  <div>
                    <label htmlFor="email">Email</label>
                    <ErrorMessage name="email" className="error" component="span"/>
                  </div>
                  <Field type="text" name="email" className="field" id="email" value={values.email} onChange={handleChange('email')}/>
                </div>

                <div className="form-field">
                  <div>
                    <label htmlFor="appsumo-code">AppSumo Codes</label>
                    <ErrorMessage name="code1" className="error" component="span"/>
                    {!codeStatus.valid && <span className="error">{codeStatus.message}</span>}
                  </div>
                  <Field type="text" name="code1" className="field" id="code1" value={values.code1} onChange={handleChange('code1')}/>
                  <Field type="text" name="code2" className="field" id="code2" value={values.code2} onChange={handleChange('code2')}/>
                  <Field type="text" name="code3" className="field" id="code3" value={values.code3} onChange={handleChange('code3')}/>
                </div>

                <div className='form-field'>
                  <button type="button" onClick={(e: any) => handleSubmit(e)}>Let's Go</button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="login-link">Already have an account? <Link to="/appsumo/login">Go Here</Link></div>
        </>
        
        }
        { submitSuccess && 
          <>
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

            <div className="resend">
              <button onClick={() => Resend()}>Resend Email</button>
            </div>
          </>
        }
        
    </RedeemPage>
  )
}

export default Redeem