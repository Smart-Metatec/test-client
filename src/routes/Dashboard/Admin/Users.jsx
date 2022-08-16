import React, { useEffect, useState, useCallback } from 'react'
import ListHeader from '../../../components/ListHeader'
import styled from 'styled-components'
import axios from '../../../config/axios'
import UserItem from '../../../components/Admin/UserItem'
import User from '../../../store/user'

const USERHEADINGS = ['Name', 'Email', 'Total Tickets', "Active Tickets", "Products", 'More Info']
const Users = () => {
    const [users, setUsers] = useState([])

    const getUsersCallback = async () => {
        const requestUsers = await axios.post('api/admin/users')
        const response = requestUsers.data
        // console.log(`this is the data: ${}`)
        setUsers(response)
    }
    // console.log(users)
    const getUsers = useCallback(getUsersCallback, [])
    console.log(users)
    useEffect(() => {
        getUsers()
    }, [getUsers])
    return (
        <UserStyle>
            <div id='search'>
                <input type="text" placeholder='Search Users'/>
            </div>
            <ListHeader headings={USERHEADINGS}/>
            {users.map((user, index) => (
                <UserItem key={index} user={user}/>
            ))}
        </UserStyle>
    )
}

const UserStyle = styled.main`
    width: 90%;
    margin: auto;

    #search {
        width: 50%;
        margin: auto;
        padding: 20px;
        input {
            width: 100%;
            font-size: 1.5em;
            border-radius: 100px;
            border: none;
            box-shadow: 0px 0px 5px 2px #00000050;
            outline: none;
            padding: 5px;
            padding-left: 20px;

            &::placeholder {
                text-align: center;
            }
        }
    }



`

export default Users