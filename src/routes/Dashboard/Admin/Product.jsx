import React, { useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import axios from '../../../config/axios'

const Product = () => {
    const location = useLocation()
    const [product, setProduct] = useState(location.state)

    const createInitialValues = () => {
        let initialValues = {
            name: product.name,
            description: product.description
        }

        // Add tiers to the initial values object
        for(let tier of product.tiers){
            const key = tier.id.toString()
            initialValues[key] = tier.price
        }

        return initialValues
    }

    const submitProduct = values => {
        // Data object to send to server
        let submitData = {}

        // Check name and description to see if they are the same
        if(values.name !== product.name) submitData.name = values.name
        if(values.description !== product.description) submitData.description = values.description

        // Check the tiers
        const numRegex = /^\d+$/
        for(let tier of product.tiers){
            // Create var for the object key (which is the tier id)
            const key = tier.id.toString()

            // Skip if the key does exist
            if(!key in values) continue
            
            // Update the submit data object if the tier price needs to be updated
            if(values[key] !== tier.price && numRegex.test(values[key])) submitData[key] = values[key]
        }

        // Send data to server for update
    }
    return (
        <ProductStyles>
          <Formik
            initialValues={createInitialValues()}
            onSubmit={submitProduct}
          >
            {({
                values,
                handleChange,
                handleSubmit
            }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" id="name" value={values.name} onChange={handleChange('name')}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <Field type="text" name="description" id="description" value={values.description} onChange={handleChange('description')}/>
                    </div>
                    {product.tiers.map((tier, index) => (
                        <div key={index}>
                            <label htmlFor={`tier-${tier.id}`}>Tier-{tier.id} ({tier.duration})</label>
                            <Field type="text" name={`tier-${tier.id}`} id={`tier-${tier.id}`} value={values[`${tier.id}`]} onChange={handleChange(`${tier.id}`)}/>
                        </div>
                    ))}
                    <div>
                        <button type='button' onClick={handleSubmit}>Save</button>
                    </div>
                </Form>

            )}
          </Formik>
        </ProductStyles>
    )
}
const ProductStyles = styled.main`
    form {
        width: 40vw;
        margin: auto;
        font-size: 1.25em;

        div {
            margin-top: 1rem;

            label {
                display: block;
            }
            input {
                width: 100%;
                font-size: 1em;
                padding: 5px;
                border-radius: 5px;
                border: 1px solid ${({theme}) => theme.colors.darkBlue};
                outline: none;
                &:focus {
                    box-shadow: 0px 0px 5px 0px ${({theme}) => theme.colors.darkBlue};
                }
            }

            button {
                font-size: 1em;
                padding: 5px 2rem;
                margin: auto;
                display: block;
                background-color: ${({theme}) => theme.colors.lightBlue};
                border: none;
                color: white;
                border-radius: 5px;
                cursor: pointer;
                outline: none;
            }
        }
    }

`
export default Product