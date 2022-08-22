import { useNavigate } from "react-router"
import React, { useEffect, useState, useCallback } from "react"
// import axios from "axios"

import { ProductComponent } from "../styled/Product.styled"
import axios from "../config/axios"

const Product: React.FC<any> = ({product: p}) => {
  const navigate = useNavigate()

  const [product, setProduct] = useState(p)
  const [activations, setActivations] = useState(0)

  const downloadProduct = async () => {
    // Set the response type from the server
    axios.defaults.responseType = 'blob'
    // make the request to download the file
    const requestDownload = await axios.post(`api/downloads/product`, {id: product.product_id})

    // create download url from the server response
    const downloadUrl = window.URL.createObjectURL(new Blob([requestDownload.data]))

    // Create link element and assign the download url and download attribute
    const link = document.createElement('a')
    link.href = downloadUrl
    link.setAttribute('download', `${product.name}.zip`)

    // Click the link to download the product
    link.click()

    // Revoke the download url to avoid memory leaks
    window.URL.revokeObjectURL(downloadUrl)
  }

  const getActiveUsesCallback = async () => {
    if(product.name !== "Commerce") return
    try {
      const request = await axios.post(`api/${product.name.toLowerCase()}/websites?action=get`)
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
        <button type="button" onClick={() => navigate(`/dashboard/products/${product.name.toLowerCase().split(" ").join("")}`)}>Manage</button>
      </div>
    </ProductComponent>
  )
}

export default Product