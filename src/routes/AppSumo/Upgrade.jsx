import { useEffect, useRef } from "react"
// import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router"


import { UpgradePage } from "../../styled/AppSumo/Upgrade.styled"
import { setProducts } from "../../store/products"
import { login } from "../../store/user"
import axios from "../../config/axios"

const Upgrade = () => {

    const codeRef = useRef()

    const navigate = useNavigate()
    
    const { user } = useSelector(state => state.user)
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()

    const claim = async () => {
        try {
            if(codeRef.current.value){
                const request = await axios.post("api/appsumo/upgrade", {appSumoCode: codeRef.current.value})
                if(request.data){
                    console.log(request.data)
                    navigate("../../dashboard")
                }
            }
           
        } catch (e){
            console.log(e)
        }
    }

    useEffect(async () => {
        try {
            const request = await axios.post("users/account/get", null)
            if(request){
                dispatch(login(request.data.user))
                dispatch(setProducts(request.data.products))
            }
        } catch (e) {
            console.log(e)
        }
    }, [])
  return (
    <UpgradePage>
        <header>
            <img src="../images/smt-logo-name.png" alt="" />
        </header>
        <main>
            <form>
                <div>
                    <label>Enter your AppSumo Code</label>
                    <input type="text" ref={codeRef}/>
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
                        {products.map(product => (
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