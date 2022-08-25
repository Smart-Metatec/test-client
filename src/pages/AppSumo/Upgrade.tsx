import React, { useEffect, useRef, useCallback, useState } from "react"
// import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router"


import { UpgradePage } from "../../styled/AppSumo/Upgrade.styled"
import { setProducts } from "../../store/products"
import { login } from "../../store/user"
import axios from "../../config/axios"

interface ErrorState {
    error: boolean,
    message: string
}

const Upgrade = () => {
    const [error, setError] = useState<ErrorState>({error: false, message: ""})

    const code1Ref = useRef<HTMLInputElement>(null)
    const code2Ref = useRef<HTMLInputElement>(null)
    const code3Ref = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()
    
    const { user } = useSelector((state: any) => state.user)
    const { products } = useSelector((state: any) => state.products)
    const dispatch = useDispatch()

    const claim = async () => {
        // Check to see the the ref exists
        if(!code1Ref.current || !code2Ref.current || !code3Ref.current) return

        // Create vars for easy of use
        let code1 = code1Ref.current.value
        let code2 = code2Ref.current.value
        let code3 = code3Ref.current.value

        // array to store codes being sent to the server
        let codeArray: string[] = []

        // Add codes to the code array
        if(code1) codeArray.push(code1)
        if(code2) codeArray.push(code2)
        if(code3) codeArray.push(code3)

        // If there are no codes display error
        if(codeArray.length < 1) return setError({error: true, message: "Please enter a code"})

        // Check if there are duplicate codes
        if(code1 && code2 && code1 === code2) return setError({error: true, message: "Codes cannot be the same."})
        if(code2 && code3 && code2 === code3) return setError({error: true, message: "Codes cannot be the same."})
        if(code1 && code3 && code1 === code3) return setError({error: true, message: "Codes cannot be the same."})

        

        try {
            
            const upgradeRequest = await axios.post("api/appsumo/upgrade", {codes: codeArray})
            if(upgradeRequest.status === 200) navigate("../../dashboard")
        } catch (e: any) {
            setError({error: true, message: e.response.data.message})
        }
    }
    const getAccount = useCallback(async () => {
        try {
            const request = await axios.post("api/users/account/get")
            if(request){
                dispatch(login(request.data.user))
                dispatch(setProducts(request.data.products))
            }
        } catch (e: any) {
            console.log(e)
           navigate("../../login")
        }
    }, [])

    useEffect(() => {
        getAccount()
    }, [getAccount])
  return (
    <UpgradePage>
        <header>
            <img src="../images/smt-logo-name.png" alt="" />
        </header>
        <main>
            <form>
                <div>
                    <label>Enter your AppSumo Codes </label>
                    <div className="error">{error.message}</div>
                    <input type="text" ref={code1Ref}/>
                    <input type="text" ref={code2Ref}/>
                    <input type="text" ref={code3Ref}/>
                </div>
                <div>
                    <button type="button" onClick={() => claim()}>Claim</button>
                    <button onClick={() => navigate("../../dashboard")}>Go To Dashboard</button>
                </div>
            </form>
            <section className="user-info">
                <div className="labels">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Products</div>
                </div>
                <div className="data">
                    <div>{user.first_name} {user.last_name}</div>    
                    <div>{user.email}</div>    
                    <div>
                        {products.map((product: any) => (
                        <div key={product.name}>{product.name} ({product.uses} Account{product.uses > 1 ? "s" : ""})</div>
                        ))}
                    </div>    
                </div>
            </section>

        </main>
    </UpgradePage>
  )
}

export default Upgrade