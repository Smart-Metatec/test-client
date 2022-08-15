import React from 'react'
import { Outlet } from 'react-router'
import {AdminPage} from "../../../styled/Admin/Admin.styled"
import Header from '../../../components/Admin/Header'

const Admin = () => {
  return (
    <AdminPage>
        <Header/>
        <Outlet />
    </AdminPage>
  )
}

export default Admin