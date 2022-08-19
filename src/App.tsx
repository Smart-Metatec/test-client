import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"

import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"

import AdminLogin from "./pages/Dashboard/Admin/Login"

import NotFound from "./pages/NotFound"

import AppSumoRoutes from "./routes/AppSumoRoutes"
import DashboardRoutes from "./routes/DashboardRoutes"
import AdminRoutes from "./routes/AdminRoutes"


const App: React.FC = (): JSX.Element => {

  return (
    <div className="App">
          <Routes>
              <Route path="/" element={<Navigate to="dashboard" />}/>
              <Route path="forgot-password" element={<ForgotPassword />}/>
              <Route path="resetpassword" element={<ResetPassword />}/>

              {AppSumoRoutes}

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />

              {DashboardRoutes}

              <Route path="admin-login" element={<AdminLogin/>}/>
              {AdminRoutes}

              <Route path="*" element={<NotFound />}/>
              
          </Routes>
    </div>
  )
}

export default App;
