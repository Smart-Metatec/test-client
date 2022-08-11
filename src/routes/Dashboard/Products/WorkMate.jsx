import { useRef, useState } from "react"
import { IoMdArrowBack } from "react-icons/io"
import { FaTimes } from "react-icons/fa"
import { useNavigate } from "react-router"

import { WorkMatePage } from "../../../styled/Products/WorkMate.styled"

const WorkMate = () => {
  const emailRef = useRef()
  const [emailList, setEmailList] = useState([])

  const navigate = useNavigate()

  const addEmail = () => {
    const email = emailRef.current.value
    const date = new Date(Date.now()).toLocaleDateString()

    if(email){
      emailList.filter(emailItem => emailItem.email === email)
      // if(!itemExists){
        setEmailList(prevList => ([...prevList, {email, date}]))
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