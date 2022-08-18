import React, { useState, useRef, useEffect } from "react"

import { CountryDropDownComponent } from "../styled/Components/CountryDropDown.styled"


const CountryDropDown: React.FC<any> = ({ countries }): JSX.Element => {
    const [showList, setShowList] = useState(false)
    const [showCountries, setShowCountries] = useState(countries)
    const selectRef = useRef<HTMLInputElement>(null)

    const countrySelected = (e: any) => {
        const selectedCountry = e.target.textContent
        console.log(selectedCountry)
        if(selectRef && selectRef.current){

            selectRef.current.value = selectedCountry
        }
        setShowList(false)
    }

    const filterCountries = (e: any) => {
        const input = e.target.value
        const regex = new RegExp(`^${input}`, 'gi')
        countries = showCountries.filter((country: any) => {
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
                {countries.map((country: any) => (
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