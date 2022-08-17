import React from 'react'
import { MdInfoOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { ItemStyle } from '../../styled/shared/Item.styled'

const UserItem = ({user}) => {

  const navigate = useNavigate()

  return (
    <ItemStyle>
        <div>{user.first_name}</div>
        <div>{user.email}</div>
        <div>5</div>
        <div>1</div>
        <div>{user.products.length}</div>
        <div><MdInfoOutline size={30} onClick={() => navigate(`/admin/users/${user.id}`, {state: {user}})}/></div>
    </ItemStyle>
  )
}

export default UserItem