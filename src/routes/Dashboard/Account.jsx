import { useSelector } from "react-redux"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router"
// import axios from "axios"

import CountryDropDown from "../../components/CountryDropDown"
import DialCodeDropDown from "../../components/DialCodeDropDown"
import Loading from "../../components/Loading"
import axios from "../../config/axios"

import { AccountPage } from "../../styled/Dashboard/Account.styled"


const Account = () => {
  const navigate = useNavigate()

  const [countries, setCountries] = useState([])
  const [countryCode, setCountryCode] = useState("+00")

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const displayNameRef = useRef()
  const contactEmailRef = useRef()
  // const countryCodeRef = useRef("+00")
  const contactNumberRef = useRef()
  const companyNameRef = useRef()
  const provinceRef = useRef()
  const cityRef = useRef()
  const postalRef = useRef()
  const address1Ref = useRef()
  const address2Ref = useRef()




  const { user } = useSelector(state => state.user)

  const filterData = () => {
    const first_name = firstNameRef.current.value
    const last_name = lastNameRef.current.value
    const display_name = displayNameRef.current.value
    const contact_email = contactEmailRef.current.value
    const country_code = countryCode
    const contact_number = contactNumberRef.current.value
    const company_name = companyNameRef.current.value
    const country = document.getElementById("country").value
    const province = provinceRef.current.value
    const city = cityRef.current.value
    const post_code = postalRef.current.value
    const address1 = address1Ref.current.value
    const address2 = address2Ref.current.value

    let info = {
      first_name,
      last_name,
      display_name,
      contact_email,
      country_code,
      contact_number,
      company_name,
      country,
      province,
      city,
      post_code,
      address1,
      address2,
    }

    // Check if the data is filled in
    // Check if the data is different from the user in state
    // console.log(user)
    let filledInData = Object.entries(info).filter((item) => {
      if(item[1] && user[item[0]] !== item[1]){
        return true
      }
      else return false
    })

    return filledInData.reduce((acc, val) => {
      const [key, value] = val
      acc[key] = value
      return acc
    }, {})

  }


  const update = async () => {
    const updatedData = filterData()
    console.log(updatedData)
    if(Object.keys(updatedData).length > 0){
      try {
        const request = await axios.post("users/account/update", updatedData)
        const response = request.data
        if(response.pass){
          console.log(response)
          window.location.reload(false)
        }
      } catch (e) {
        if(e?.response?.status === 403){
          navigate("/login")
        }
      }

    }
    
  }

  const fillInFields = () => {
    if(user){
      firstNameRef.current.value = user.first_name
      lastNameRef.current.value = user.last_name
      displayNameRef.current.value = user.display_name
      contactEmailRef.current.value = user.contact_email
      setCountryCode(user.country_code)
      contactNumberRef.current.value = user.contact_number
      companyNameRef.current.value = user.company_name
      document.getElementById("country").value = user.country
      provinceRef.current.value = user.province
      cityRef.current.value = user.city
      postalRef.current.value = user.post_code
      address1Ref.current.value = user.address1
      address2Ref.current.value = user.address2
      // console.log(user)
    }

  }

  const getCountries = async () => {
    try {
      const countries = await axios("https://restcountries.com/v3.1/all")
      const filteredCountries = countries.data.map(country => {
        return ({
          name: country.name.common,
          flag: country.flags.svg,
          code: country.idd
        })
      })

      filteredCountries.sort((a, b) => {
        const fa = a.name.toLowerCase()
        const fb = b.name.toLowerCase()

        return fa < fb ? -1 : fa > fb ? 1 : 0
      })
      setCountries(filteredCountries)
    } catch (e) {

    }
  }

  // const getCountryCode = (code) => countryCodeRef.current = code


  useEffect(async () => {
    await getCountries()
    fillInFields()
  }, [user, countryCode])

  if(countries.length <= 0) return <Loading />
  return (
    <AccountPage>
        <form >
          <h1>Personal Details</h1>
          <div>
              <div className='field-container'>
                <label>First Name</label>
                <input type="text" ref={firstNameRef}  />
              </div>

              <div className='field-container'>
                <label>Last Name</label>
                <input type="text" ref={lastNameRef}/>
              </div>

              <div className='field-container'>
                <label>Display Name</label>
                <input type="text" ref={displayNameRef}/>
              </div>
              
              <div className='field-container'>
                <label>Contact Email</label>
                <input type="text"  ref={contactEmailRef}/>
              </div>
          </div>

          <h1>Billing Details</h1>
          <div>
              <div className='field-container'>
                <label>Contact Number</label>
                <div className="number">
                  <DialCodeDropDown countries={countries} code={countryCode} getCode={setCountryCode}/>
                  <input type="text" ref={contactNumberRef} />
                </div>

              </div>

              <div className='field-container'>
                <label>Company Name</label>
                <input type="text" ref={companyNameRef}/>
              </div>

              <div className='field-container'>
                <label>Address Line 1</label>
                <input type="text" ref={address1Ref} />
              </div>

              <div className='field-container'>
                <label>Address Line 2</label>
                <input type="text" ref={address2Ref}/>
              </div>

              <div className='field-container'>
                <label>City</label>
                <input type="text" ref={cityRef}/>
              </div>

              <div className='field-container'>
                <label>Zip/Postal Code</label>
                <input type="text" ref={postalRef}/>
              </div>

              <div className='field-container'>
                <label>Country</label>
                <CountryDropDown countries={countries}/>
              </div>

              <div className='field-container'>
                <label>State/Province</label>
                <input type="text" ref={provinceRef}/>
              </div>
          </div>
          
        </form>
        <div>
          <button onClick={() => update()} className="submit" type="button">Save</button>
        </div>
    </AccountPage>
  )
}

export default Account