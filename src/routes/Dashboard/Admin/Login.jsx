import React, { useState, useEffect, useRef } from 'react'
import { AdminLoginPage } from '../../../styled/Admin/Login.styled'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import axios from '../../../config/axios'

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email address.").required("Please Enter Your Email"),
    password: Yup.string()
                 .required("Please enter your password.")
                 .min(8, "Password must be at least 8 characters")
                 .matches(/[A-Z]+/, "Password must have uppercase letters.")
                 .matches(/[a-z]+/, "Password must contain lowercase letters.")
                 .matches(/[0-9]+/, "Password must contain numbers")
                 .matches(/[@!#$%^&*(){}[\]:";'<>,\.?/]+/, "Password must contain special characters")
})

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const submit = async (values) => {
        const request = await axios.post("api/admin/login", values)
        const response = request.data
        if(response.pass){
            // Go to the admin dashboard
        }
    }

    // Change the password visibility based on click event from eye icon
    const changePasswordVisible = () => {
        // Change show password state
        setShowPassword(!showPassword)
        // get password field
        const passwordField = document.getElementById("password")
        // Change field type based on show password state
        passwordField.type = !showPassword ? "text" : "password"
    }
  return (
    <AdminLoginPage>
        <h1>Enter Your Credentials</h1>

        <Formik
            initialValues={{email: "", password: ""}}
            onSubmit={submit}
            validationSchema={LoginSchema}
        >
            {({
                values,
                errors,
                handleChange,
                handleSubmit
            }) => (
                <Form>
                    <div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <ErrorMessage name='email' component='span' className='error'/>
                        </div>
                        <Field type="email" name='email' id="email" value={values.email} onChange={handleChange('email')}/>
                        
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Password</label>
                            <ErrorMessage name='password' component='span' className='error'/>
                        </div>
                        <Field 
                            type="password" 
                            name='password' 
                            id="password" 
                            value={values.password} 
                            onChange={handleChange('password')}
                        />
                        <span onClick={() => changePasswordVisible()}>
                            { !showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                       
                    </div>
                    <div>
                        <button type='button' onClick={handleSubmit}>Login</button>
                    </div>
                </Form>
            )}
        </Formik>
        
    </AdminLoginPage>
  )
}

export default Login