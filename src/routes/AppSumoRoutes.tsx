import React from 'react'
import { Route, Navigate } from 'react-router'

import Redeem from '../pages/AppSumo/Redeem'
import AppSumoLogin from '../pages/AppSumo/Login'
import Upgrade from '../pages/AppSumo/Upgrade'

export default (
  <Route path="/appsumo">
    <Route path="" element={<Navigate to="redeem" />} />
    <Route path="redeem" element={<Redeem />}/>
    <Route path="login" element={<AppSumoLogin />}/>
    <Route path="upgrade" element={<Upgrade />}/>
</Route>
)
// export default AppSumoRoutes