import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

import { IoMdArrowBack } from "react-icons/io"
// import axios from "axios"


import { CommercePage } from "../../../styled/Products/Commerce.styled"
import axios from "../../../config/axios"

import Website from "../../../components/Products/Commerce/Website"

const Commerce = () => {

  const navigate = useNavigate()
  const { products } = useSelector(state => state.products)

  const websiteRef = useRef()
  const protocolRef = useRef()

  const [websiteList, setWebsiteList] = useState([])
  const [error, setError] = useState("")


  const addWebsite = async () => {
    let website = websiteRef.current.value
    const protocol = protocolRef.current.value
    const date = new Date(Date.now()).toLocaleString()

    const errorRegex = /^(http(s)?:\/\/)?(www\.)?/
    website = protocol + website.replace(errorRegex, "")

    const commerceProduct = getProduct()

    const inList = websiteList.filter(item => item.website === website)

    if(!website) return setError("Please enter a website")
    else if (commerceProduct.uses <= websiteList.length) return setError("Your account does not allow anymore installations.")
    else if(inList.length > 0) return setError("This website has already been added")
    else if(!validWebsite(website)) return setError("The website you entered is not valid.")
    else {
      const request = await axios.post("api/commerce/websites?action=add", {website: website, date})
      if(request.data.pass){

        setWebsiteList(prevList => ([...prevList, {website, date}]))
        websiteRef.current.value = ""
        setError("")
      }
    }
  }


  const validWebsite = (website) => {
    // const websiteRegEx = /^(https:\/\/)?(\w+\.)?\w+\.\w{1,9}(\.{1,5})?$/
    console.log(website)
    const websiteRegEx = /^(https:\/\/)?([\w\d-]+\.)?[\w\d-]+\.\w{1,5}(\.\w{1,5})?$/
    return websiteRegEx.test(website)
    
  }


  const getwebsites = async () => {
    try {
      const request = await axios.post("api/commerce/websites?action=get", {})
      if(request.data.pass){
        setWebsiteList(request.data.accounts)
      }
    } catch (e){
      console.log(e.response)
    }
  }

  const deleteWebsite = async (item) => {
    const remainingWebsites = websiteList.filter(account => item.website !== account.website)
    setWebsiteList(remainingWebsites)

    try {
      await axios.post("api/commerce/websites?action=delete", {website: item.website})
      setError("")
    } catch (e) {
      console.log(e)
    }
  }

  const getProduct = () => {
    return products.filter(product => product.name === "Commerce")[0]
  }

  useEffect(() => {
    getwebsites()
  }, [])

  return (
    <CommercePage>
        <header>
            <IoMdArrowBack className="back" onClick={() => navigate("../")}/>
            <h1>Manage Your Commerce Account</h1>
        </header>
        <main>

          <div className="add">
            <select name="" id="" ref={protocolRef}>
              <option value="https://" defaultValue>https://</option>
              <option value="http://" >http://</option>
            </select>
            <input type="text" ref={websiteRef}/>
            <button onClick={() => addWebsite()}>Add</button>  
          </div>

          <div className="error">
              <p>{error}</p>
          </div>

          <div className="headers">
            <div>Website</div>
            <div>Date Registered</div>
            <div>Delete</div>
          </div>

          <div className="display">
              {websiteList.map(item => (
                  <Website key={item.website}  item={item} deleteWebsite={deleteWebsite}/>
              ))}
          </div>
        </main>

    </CommercePage>
  )
}

export default Commerce