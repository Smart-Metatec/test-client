import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import axios from '../../../config/axios'
import ListHeader from '../../../components/ListHeader'

import ProductItem from '../../../components/Admin/ProductItem'

const PRODUCTHEADERS = ['Name', 'Total Users', 'Active Users', 'Tickets', 'More Info']

const Products = () => {
  const [products, setProducts] = useState([])


  const getProductsCallback = async () => {
    const requestProducts = await axios.post("api/admin/products")
    const response = requestProducts.data
    setProducts(Object.values(response))
  }

  const getProducts = useCallback(getProductsCallback, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <ProductStyles>
      <ListHeader headings={PRODUCTHEADERS} />
      {products.map((product, index) => (
        <ProductItem product={product} key={index}/>
      ))}
    </ProductStyles>
  )
}

const ProductStyles = styled.main`
  width: 90%;
  margin: auto;
  margin-top: 3rem;


`

export default Products