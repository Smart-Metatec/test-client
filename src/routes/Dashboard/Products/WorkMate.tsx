import React, { useRef, useState } from "react"
import { IoMdArrowBack } from "react-icons/io"
import { FaTimes } from "react-icons/fa"
import { useNavigate } from "react-router"

import { WorkMatePage } from "../../../styled/Products/WorkMate.styled"

interface Form {
  email: string,
  date: string
}

const WorkMate = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [emailList, setEmailList] = useState<Array<Form>>([])

  const navigate = useNavigate()

  const addEmail = () => {
    if(!emailRef.current) return
    const email = emailRef.current.value
    const date = new Date(Date.now()).toLocaleDateString()

    if(email){
      emailList.filter((emailItem: any) => emailItem.email === email)
      // if(!itemExists){
        setEmailList((prevList: any) => ([...prevList, {email, date}]))
        emailRef.current.value = ""
      // } else {
      //     setError("Cannot add the same email twice")
      // }

    }
    
  }
  return (
    <WorkMatePage>
        <header>
                <IoMdArrowBack className="back" onClick={() => {navigate("../")}}/>
                <h1>Manage Your WorkMate Account</h1>
        </header>
        <main>

          <div className="add">
            <input type="text" ref={emailRef}/>
            <button type="button" onClick={() => addEmail()}>Add</button>
          </div>

          <div className="headers">
              <div>Email</div>
              <div>Date Registered</div>
              <div>Delete</div>
          </div>

          <div className="display">
            {emailList && emailList.map(data => (
              <div className="display-item" key={data.email}>

                <div>{data.email}</div>
                <div>{data.date}</div>
                <div><FaTimes className="delete"/></div>

              </div>
            ))}
          </div>

        </main>
    </WorkMatePage>
  )
}

export default WorkMate