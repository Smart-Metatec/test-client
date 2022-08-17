import { Route, Routes, Navigate } from "react-router-dom"

import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import ForgotPassword from "./routes/ForgotPassword";
import ResetPassword from "./routes/ResetPassword";


import Dashboard from "./routes/Dashboard";
import Products from "./routes/Dashboard/Products";
import Account from "./routes/Dashboard/Account";
import Support from "./routes/Dashboard/Support";


import WorkMate from "./routes/Dashboard/Products/WorkMate";
import Commerce from "./routes/Dashboard/Products/Commerce";


import AppSumoLogin  from "./routes/AppSumo/Login";
import Redeem from "./routes/AppSumo/Redeem";
import Upgrade from "./routes/AppSumo/Upgrade";

import CreateTicket from "./routes/Dashboard/support/CreateTicket";
import Tickets from "./routes/Dashboard/support/Tickets";
import Ticket from "./routes/Dashboard/support/Ticket";

import AdminLogin from "./routes/Dashboard/Admin/Login"
import Admin from "./routes/Dashboard/Admin/Admin"
import Home from "./routes/Dashboard/Admin/Home"
import Users from "./routes/Dashboard/Admin/Users"
import UserInfo from "./routes/Dashboard/Admin/UserInfo";
import SupportTickets from "./routes/Dashboard/Admin/Tickets"
import AdminProducts from "./routes/Dashboard/Admin/Products"
import ProductInfo from "./routes/Dashboard/Admin/ProductInfo";

import NotFound from "./routes/NotFound"


function App() {

  return (
    <div className="App">
          <Routes>
            {/* Temporary redirect */}
              <Route path="/" element={<Navigate to="dashboard" />}/>
              <Route path="forgot-password" element={<ForgotPassword />}/>
              <Route path="resetpassword" element={<ResetPassword />}/>

              <Route path="/appsumo">
                <Route path="" element={<Navigate to="redeem" />} />
                <Route path="redeem" element={<Redeem />}/>
                <Route path="login" element={<AppSumoLogin />}/>
                <Route path="upgrade" element={<Upgrade />}/>
              </Route>

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />

              {/* start Dashboard routes */}
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
              {/* end Dashboard routes */}

              {/* start Admin Routes */}
              <Route path="admin-login" element={<AdminLogin/>}/>
              <Route path="/admin" element={<Admin />} >
                <Route path="" element={<Home />}/>
                <Route path="users" element={<Users />}/>
                <Route path="users/:id" element={<UserInfo />}/>
                <Route path="tickets" element={<SupportTickets />}/>
                <Route path="products" element={<AdminProducts />}/>
                <Route path="products/:id" element={<ProductInfo />}/>
                <Route path="*" element={<Navigate to=""/>}/>
              </Route>

              <Route path="*" element={<NotFound />}/>
              
          </Routes>
    </div>
  );
}

export default App;
