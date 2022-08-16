import React, { useState, useEffect } from 'react'
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const UserInfo = () => {
    const location = useLocation()
    
    const [user] = useState(location.state.user)
    const [personalDetails, setPersonalDetails] = useState([])
    const [address, setAddress] = useState([])

    // create personal details object
    const createPersonalDetails = () => {
        const details = [
            {name: "First Name", data: user.first_name},
            {name: "Last Name", data: user.last_name},
            {name: "Display Name", data: user.display_name},
            {name: "Contact Email", data: user.email},
            {name: "Contact Number", data: user.contact_number},
            {name: "Company Name", data: user.company_name},
        ]
        setPersonalDetails(details)
    }

    // Create address object
    const createAddress = () => {
        const address = [
            {name: "Address 1", data: user.address1},
            {name: "Address 2", data: user.address2},
            {name: "Post Code", data: user.post_code},
            {name: "City", data: user.city},
            {name: "Province", data: user.province},
            {name: "Country", data: user.country},
        ]
        setAddress(address)
    }

    // Display the personal and address data in the UI
    const displayUserData = (data) => {
        return data.map((item, index) => (
            <div className='item' key={index}>
                <div>{item.name}:</div>
                <div>{item.data}</div>
            </div>
        ))
    }

    // Callback hooks for calling setState inside useEffect
    const personalCallback = useCallback(createPersonalDetails, [])
    const addressCallback = useCallback(createAddress, [])

    useEffect(() => {
        personalCallback()
        addressCallback()
    }, [personalCallback, addressCallback])
    return (
        <UserInfoStyle>
            <div id="info">
                <section>
                    <h2>Products</h2>
                </section>
                <section>
                    <h2>Personal Details</h2>
                    <div className='item-container'>
                       {displayUserData(personalDetails)}
                    </div>
                    
                </section>
                <section>
                    <h2>Address</h2>
                    <div className='item-container'>
                        {displayUserData(address)}
                    </div>
                </section>
            </div>
            <div id='tickets'>
                <h2>Tickets</h2>
                <div id='ticket-header'>
                    <div>Name</div>
                    <div>Status</div>
                    <div>Last Updated</div>
                </div>
                <div id='ticket-container'>

                </div>
            </div>

        </UserInfoStyle>
    )
}

const UserInfoStyle = styled.main`
    

#info {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

section {
    width: 20vw;
    h2 {
        text-align: center;
    }
    .item-container {
        .item {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid ${({theme}) => theme.colors.green};
            margin-top: 5px;
        }
    }
}

#tickets {
    width: 90%;
    margin: auto;

    #ticket-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid ${({theme}) => theme.colors.green};
        padding-bottom: 1rem;
    }
}


`

export default UserInfo