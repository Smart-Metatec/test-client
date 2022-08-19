import React, { useRef, useState } from "react"
import { IoMdArrowBack } from "react-icons/io"
import { FaTimes } from "react-icons/fa"
import { useNavigate } from "react-router"
import axios from "../../../config/axios"
import { WorkMatePage } from "../../../styled/Products/WorkMate.styled"

interface Form {
  email: string,
  date: string
}

enum MailStatus {
  default,
  success,
  fail,
}

const WorkMate = () => {
  const [mailState, setMailState] = useState<MailStatus>(MailStatus.default)

  const navigate = useNavigate()

  const sendProductKey = async () => {
    // Send the product key
    const requestProductKey = await axios.post("api/mail/trustlock/productkey")
    if(requestProductKey.status === 200) setMailState(MailStatus.success)
    else setMailState(MailStatus.fail)

  }
  return (
    <WorkMatePage>
        <header>
                <IoMdArrowBack className="back" onClick={() => {navigate("../")}}/>
                <h1>Manage Your TrustLock Account</h1>
        </header>
        <main>
          {
            mailState === MailStatus.default 
              ?
                <button onClick={() => sendProductKey()}>Send Product Key</button>
              : 
            mailState === MailStatus.success
              ? 
                <h2>Please check your inbox for the product key</h2>
              :
                <h2>The was not sent please try again later or contact support</h2>
          }
          <a href="#">Request Migration</a>

        </main>
    </WorkMatePage>
  )
}

export default WorkMate