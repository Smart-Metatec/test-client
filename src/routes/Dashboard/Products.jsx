import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

import Product from "../../components/Product"
import { ProductsPage } from "../../styled/Dashboard/Products.styled"

const HEADER = ["Name", "Price", "Expiry", "Uses", "Download", "Manage"]

const Products = () => {
  const { products } = useSelector(state => state.products)
  const navigate = useNavigate()
  return (
    <ProductsPage>

      <div className="top">
        <button onClick={() => navigate("../../../appsumo/upgrade")}>Stack AppSumo Code</button>
        <h1>All your glorious products</h1>
      </div>
      
      <div className="header">
        {HEADER.map(head => (
          <div key={head}>{head}</div>
        ))}
      </div>

        {products.map(product => {
          return <Product key={product.product_id} product={product} />
        })}


    </ProductsPage>
  )
}

export default Products