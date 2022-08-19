import React from 'react'
import { Route, Navigate } from 'react-router'

import Home from '../pages/Dashboard/Admin/Home'
import UserInfo from '../pages/Dashboard/Admin/UserInfo'
import ProductInfo from '../pages/Dashboard/Admin/ProductInfo'
import Product from '../pages/Dashboard/Admin/Product'
import SupportTickets from "../pages/Dashboard/Admin/Tickets"
import AdminProducts from "../pages/Dashboard/Admin/Products"
import Users from '../pages/Dashboard/Admin/Users'
import Admin from '../pages/Dashboard/Admin/Admin'

export default (
  <Route path="/admin" element={<Admin />} >
    <Route path="" element={<Home />}/>
    <Route path="users" element={<Users />}/>
    <Route path="users/:id" element={<UserInfo />}/>
    <Route path="tickets" element={<SupportTickets />}/>
    <Route path="products" element={<AdminProducts />}/>
    <Route path="products/:id" element={<ProductInfo />}/>
    <Route path="products/edit/:id" element={<Product />}/>
    <Route path="*" element={<Navigate to=""/>}/>
  </Route>
)