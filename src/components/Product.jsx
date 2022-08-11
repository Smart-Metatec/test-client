import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
// import axios from "axios"

import { ProductComponent } from "../styled/Product.styled"
import axios from "../config/axios"

const Product = ({product: p}) => {



  const navigate = useNavigate()

  const [product, setProduct] = useState(p)
  const [activations, setActivations] = useState(1)

  useEffect(async () => {
    if(Date.parse(p.expiry)){
      let expiry = new Date(p.expiry).toLocaleDateString()
      setProduct(prevProduct => ({...prevProduct, expiry}))
    }
    await getActiveUses()

  }, [])

  

  const downloadProduct = () => {
    window.location.assign(`https://api.smartmetatec.com/api/users/downloadproduct?id=${product.product_id}`)
  }

  const getActiveUses = async () => {
    try {
      const request = await axios.post(`api/${product.name.toLowerCase()}/websites?action=get`, {})
      if(request.data.pass){
        setActivations(request.data.accounts.length)
      }
    } catch (e) {
      console.log(e)
    }
    
    
  }



  return (
    <ProductComponent>
      <div>{product.name}</div>
      <div>${product.price}.00</div>
      <div>{product.expiry}</div>
      <div>{activations}/{product.uses}</div>
      <div>
        <button className="download" type="button" onClick={() => downloadProduct()}>Download</button>
      </div>
      <div>
        <button type="button" onClick={() => navigate(product.name.toLowerCase())}>Manage</button>
      </div>
    </ProductComponent>
  )
}

export default Product