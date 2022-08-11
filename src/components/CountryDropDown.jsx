import { useState, useRef, useEffect } from "react"

import { CountryDropDownComponent } from "../styled/Components/CountryDropDown.styled"


const CountryDropDown = ({ countries }) => {
    const [showList, setShowList] = useState(false)
    const [showCountries, setShowCountries] = useState(countries)
    const selectRef = useRef()

    const countrySelected = (e) => {
        const selectedCountry = e.target.textContent
        console.log(selectedCountry)
        selectRef.current.value = selectedCountry
        setShowList(false)
    }

    const filterCountries = (e) => {
        const input = e.target.value
        const regex = new RegExp(`^${input}`, 'gi')
        countries = showCountries.filter(country => {
            return regex.test(country.name)
        })
        // setShowCountries(filtered)

    }

    useEffect(() => {
        // setShowCountries(countries)
    }, [showCountries])

    return (
        <CountryDropDownComponent  show={showList}  >
            <ul className="country-list" contentEditable={false}>
                {countries.map(country => (
                    <li key={country.name} >
                        <img src={country.flag} alt="" />
                        <span onClick={(e) => countrySelected(e)}>{country.name}</span>
                    </li>
                ))}
            </ul>
            <input type="text" 
                ref={selectRef}
                onChange={(e) => filterCountries(e)}
                // onBlur={() => setShowList(false)} 
                onClick={() => setShowList(!showList)}
                id="country"/>
        </CountryDropDownComponent>
    )
}

export default CountryDropDown