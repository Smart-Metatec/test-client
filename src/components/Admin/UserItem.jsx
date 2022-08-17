import React from 'react'
import styled from 'styled-components'
import { MdInfoOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const UserItem = ({user}) => {


  const navigate = useNavigate()
  return (
    <UserItemStyle>
        <div>{user.first_name}</div>
        <div>{user.email}</div>
        <div>5</div>
        <div>1</div>
        <div>{user.products.length}</div>
        <div><MdInfoOutline size={30} onClick={() => navigate(`/admin/users/${user.id}`, {state: {user}})}/></div>
    </UserItemStyle>
  )
}

const UserItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  box-shadow: 0px 0px 5px 1px #00000050;
  border-radius: 10px;
  padding: 10px;
  align-items: center;

  div {
    width: 100%;
    svg {
      cursor: pointer;
    }
  }

`

export default UserItem