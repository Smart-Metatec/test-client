import React, {useState} from 'react'
import { useLocation } from 'react-router'

const ProductInfo = () => {
    const location = useLocation()
    const [product, setProduct] = useState(location.state)
    console.log(product)
    return (
        <div>ProductInfo</div>
    )
}

export default ProductInfo