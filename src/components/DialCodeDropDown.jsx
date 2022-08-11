import { useState, useRef, useEffect } from "react"
import { FaAngleDown } from "react-icons/fa"
import { DialDrop } from "../styled/Components/DialCodeDropDown.styled"


const DialCodeDropDown = ({countries, code: initCode, getCode: setCountryCode}) => {

    const [showCodes, setShowCodes] = useState(false)
    const [flag, setFlag] = useState(null)

    const displayCodeRef = useRef()

    const getCode = (country) => {
        const code = `${country?.code?.root}${country?.code?.suffixes && country?.code.suffixes[0]}`
        displayCodeRef.current.innerText = code
        setCountryCode(code)
        console.log(country.flag)
        setFlag(country.flag)

    }

    const getFlag = (code) => {
        const country = countries.filter(country => `${country?.code?.root}${country?.code?.suffixes && country?.code.suffixes[0]}` == code)
        setFlag(country[0]?.flag)
    }

    useEffect(() => {
        getFlag(initCode)
    }, [flag])
    
    return (
        <DialDrop onClick={() => setShowCodes(!showCodes)} show={showCodes}>
            <div>
                <FaAngleDown />
                <span ref={displayCodeRef} id="dial-code">
                    <img src={flag} alt="" />
                    {initCode}
                </span>
            </div>
            <ul className="drop-down">
                {countries.map(country => (
                    <li key={country.name}>
                        <img src={country?.flag} alt="" />
                        <span onClick={() => getCode(country)}>{country.name} ({country?.code?.root}{country?.code?.suffixes && country?.code.suffixes[0]})</span>
                    </li>
                ))}
            </ul>
        </DialDrop>
    )
}

export default DialCodeDropDown