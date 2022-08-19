import React, { useEffect, useState, useCallback } from 'react'
import { Outlet, useNavigate } from 'react-router'
import {AdminPage} from "../../../styled/Admin/Admin.styled"
import Header from '../../../components/Admin/Header'
import axios from "../../../config/axios"

const Admin = () => {
  // const [token, setToken] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()

  const getAdminCallback = async () => {
    try {
      const requestUser = await axios.get("api/admin/get")
      const response = requestUser.data
      setLoggedIn(true)
    } catch(e: any) {
      // If there is no token the admin must log in
      if(e.response.status === 403) navigate("/admin-login")
    }

  }

  const getAdmin = useCallback(getAdminCallback, [])
  useEffect(() => {
    if(!loggedIn) getAdmin()
  }, [getAdmin])
  return (
    <AdminPage>
        <Header/>
        <Outlet />
    </AdminPage>
  )
}

export default Admin