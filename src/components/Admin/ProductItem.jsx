import React from 'react'
import { ItemStyle } from '../../styled/shared/Item.styled'
import {MdInfoOutline} from "react-icons/md"
import { useNavigate } from 'react-router'

const ProductItem = ({ product }) => {

    const navigate = useNavigate()

    const getActiveUsers = users => users.filter(user => user.active)
    return (
        <ItemStyle>
            <div>{product.name}</div>
            <div>{product.users.length}</div>
            <div>{getActiveUsers(product.users).length}</div>
            <div>tickets</div>
            <div>
                <MdInfoOutline 
                    size={30} 
                    onClick={() => navigate(`/admin/products/${product.name}`, {state: product})}/>
            </div>
        </ItemStyle>
    )
}

export default ProductItem