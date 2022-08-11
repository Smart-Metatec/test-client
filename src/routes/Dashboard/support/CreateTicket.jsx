import { useState, useRef } from "react"
import { useNavigate } from "react-router"
// import axios from "axios"
import { IoMdArrowBack } from "react-icons/io"


import { CreateTicketForm } from "../../../styled/Support/createTicket.styled"
import axios from "../../../config/axios"

const CreateTicket = () => {
    
  // Local State
  const [submitSuccess] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState()

  // References
  const nameRef = useRef()
  const emailRef = useRef()
  const subjectRef = useRef()

  // navigate function to navigate to different routes
  const navigate = useNavigate()

  const verify = async (name, email, subject, message) => {
    const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    let errorMessage = ""
    switch(true){
      case !name:
        errorMessage = "Please provide your name"
        break
      case !email: 
        errorMessage = "Please provide an email"
        break
      case !emailRegEx.test(email):
        errorMessage = "Email address is not valid"
        break
      case !subject:
        errorMessage = "Please provide a subject"
        break
      case !message:
        errorMessage = "Please provide a message"
        break
      default:
        errorMessage = "An error occured"
    }
    setError(errorMessage)

    if(!errorMessage){
      try {
        const request = await axios.post("api/verify/email", {email: email})
        const response = request.data
        if(response.pass){
          setError("")
          return true
        }
        return false
      } catch (e) {
          setError(e.response.data.message)
          if(e.response.status === 403){
            navigate("/login")
          }
      }
      
    }

  }

  const submit = async () => {
    const name = nameRef.current.value
    const email = emailRef.current.value
    const subject = subjectRef.current.value
    const verified = await verify(name, email, subject, message)
    if(verified){
      // Create ticket
      const ticket = await axios.post("api/tickets/create", {name, email, subject, message})
      navigate(`../ticket?id=${ticket.data.ticket_id}`)
    }


  }

  return (
    <CreateTicketForm>
        <div className="back">
            <IoMdArrowBack  onClick={() => navigate("../")}/>
            <h1>Create a New Ticket</h1>
        </div>
        { !submitSuccess &&<form>

        <div className="wrapper">

          <div className="field-container">
            <label >Name</label>
            <input type="text" ref={nameRef}/>
          </div>

          <div className="field-container">
            <label >Email</label>
            <input type="text" ref={emailRef}/>
          </div>

        </div>
        
        <div className="field-container">
          <label >Subject</label>
          <input type="text" ref={subjectRef}/>
        </div>

        <div className="field-container">
          <label >Message</label>
          <textarea name="" id="" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>

        <div>
          <button type="button"  onClick={() => submit()}>Send</button>
        </div>
      </form>}
    </CreateTicketForm>
  )
}

export default CreateTicket