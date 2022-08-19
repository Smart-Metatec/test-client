import React, { Fragment } from 'react'
import { Route, Navigate } from 'react-router'

import Dashboard from '../pages/Dashboard'
import Products from '../pages/Dashboard/Products'
import WorkMate from '../pages/Dashboard/Products/WorkMate'
import Commerce from '../pages/Dashboard/Products/Commerce'
import Account from '../pages/Dashboard/Account'
import Support from '../pages/Dashboard/Support'
import Tickets from '../pages/Dashboard/support/Tickets'
import Ticket from '../pages/Dashboard/support/Ticket'
import CreateTicket from '../pages/Dashboard/support/CreateTicket'

const DashboardRoutes = () => {
  return (
        <Route path="/dashboard" element={<Dashboard/>}>

            <Route path="" element={<Navigate to="products" />}/>
            <Route path="products" >
                <Route path="" element={<Products />}/>
                <Route path="workmate" element={<WorkMate/>}/>
                <Route path="commerce" element={<Commerce/>}/>
                <Route path="*" element={<Navigate to=""/>}/>
            </Route>

            <Route path="account" element={<Account />}/>

            <Route path="support">
                <Route path="" element={<Support/>}/>
                <Route path="tickets" element={<Tickets/>}/>
                <Route path="ticket" element={<Ticket />}/>
                <Route path="createticket" element={<CreateTicket/>}/>
            </Route>
        </Route>
  )
}

export default (
    <Route path="/dashboard" element={<Dashboard/>}>

        <Route path="" element={<Navigate to="products" />}/>
        <Route path="products" >
            <Route path="" element={<Products />}/>
            <Route path="workmate" element={<WorkMate/>}/>
            <Route path="commerce" element={<Commerce/>}/>
            <Route path="*" element={<Navigate to=""/>}/>
        </Route>

        <Route path="account" element={<Account />}/>

        <Route path="support">
            <Route path="" element={<Support/>}/>
            <Route path="tickets" element={<Tickets/>}/>
            <Route path="ticket" element={<Ticket />}/>
            <Route path="createticket" element={<CreateTicket/>}/>
        </Route>
    </Route>
)

// export default DashboardRoutes