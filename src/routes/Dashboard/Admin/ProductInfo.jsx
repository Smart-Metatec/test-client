import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router'
import styled from 'styled-components'
import ListHeader from '../../../components/ListHeader'

const ProductInfo = () => {
    const location = useLocation()
    const [product, setProduct] = useState(location.state)

    const navigate = useNavigate()

    return (
        <ProductInfoStyle>
            <div id='btn-container'>
                <button type='button' onClick={() => navigate(`/admin/products/edit/${product.id}`, {state: product})}>Edit</button>
            </div>
            <section id='info-tier'>
                <div id='info'>
                    <h2>Info</h2>
                    <div id='info-container'>
                        <div className='item-container'>
                            <div>Name:</div>
                            <div>{product.name}</div>
                        </div>
                        <div className='item-container'>
                            <div>Total Users:</div>
                            <div>{product.users.length}</div>
                        </div>
                        <div className='item-container'>
                            <div>Description:</div>
                            <div>{product.description}</div>
                        </div>
                    </div>
                </div>
                <div id='tiers'>
                    <h2>Tiers</h2>
                    <div id='tier-container'>
                        {product.tiers.map((tier, index) => (
                            <div key={index} className="tier-item">
                                <span>{index+1}. </span>
                                <div>
                                    <span>Price: ${tier.price}</span>
                                    <span>Duration: {tier.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id='tickets'>
                <h2>Tickets</h2>
                <div>
                    <ListHeader headings={["Name", "Status", "Last Updated"]}/>
                </div>
            </section>
        </ProductInfoStyle>
    )
}

const ProductInfoStyle = styled.main`
#btn-container {
    display: flex;
    width: calc(100vw - 2rem);
    margin: 1rem;
    justify-content: flex-end;
    align-items: center;

    button {
        justify-self: flex-end;
        align-self: flex-end;
        background-color: ${({theme}) => theme.colors.lightBlue};
        border: none;
        color: white;
        padding: 5px 30px;
        font-size: 1.5em;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            box-shadow: 0px 0px 5px 1px ${({theme}) => theme.colors.lightBlue};
        }
    }
}


#info-tier {
    display: flex;
    justify-content: space-around;

    .item-container {
        display: flex;
        justify-content: space-between;
        width: 20vw;
        margin-top: 10px;
        border-bottom: 1px solid ${({theme}) => theme.colors.green};

        div {
            width: 10vw;
        }
    }

    .tier-item {
        display: flex;
        width: 20vw;
        justify-content: space-between;
        text-align: left;
        border-bottom: 1px solid ${({theme}) => theme.colors.green};
        margin-top: 10px;

        > span {
            width: 3vw;
        }

        div {
            width: 15vw;
            display: flex;
            justify-content: space-between;

            span {
                width: 7vw;
            }
        }
    }
}

#tickets {
    margin: 2rem;
    margin-top: 5rem;
}
`

export default ProductInfo