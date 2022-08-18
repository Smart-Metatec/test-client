import { useNavigate } from "react-router"
import React, { useEffect, useState, useCallback } from "react"
// import axios from "axios"

import { ProductComponent } from "../styled/Product.styled"
import axios from "../config/axios"

const Product: React.FC<any> = ({product: p}) => {
  const navigate = useNavigate()

  const [product, setProduct] = useState(p)
  const [activations, setActivations] = useState(1)



  

  const downloadProduct = () => {
    window.location.assign(`https://api.smartmetatec.com/api/users/downloadproduct?id=${product.product_id}`)
  }

  const getActiveUsesCallback = async () => {
    try {
      const request = await axios.post(`api/${product.name.toLowerCase()}/websites?action=get`, {})
      if(request.data.pass){
        setActivations(request.data.accounts.length)
      }
    } catch (e) {
      console.log(e)
    }
    
    
  }

  const getActiveUsers = useCallback(async () => await getActiveUsesCallback(), [])

  useEffect(() => {
    if(Date.parse(p.expiry)){
      let expiry = new Date(p.expiry).toLocaleDateString()
      setProduct((prevProduct: any) => ({...prevProduct, expiry}))
    }
    getActiveUsers()

  }, [getActiveUsers])


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