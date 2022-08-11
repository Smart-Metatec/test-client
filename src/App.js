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

              <Route path="/dashboard" element={<Dashboard/>}>

                <Route path="" element={<Navigate to="products" />}/>
                <Route path="products" >
                  <Route path="" element={<Products />}/>
                  <Route path="workmate" element={<WorkMate/>}/>
                  <Route path="commerce" element={<Commerce/>}/>
                </Route>

                <Route path="account" element={<Account />}/>

                <Route path="support">
                  <Route path="" element={<Support/>}/>
                  <Route path="tickets" element={<Tickets/>}/>
                  <Route path="ticket" element={<Ticket />}/>
                  <Route path="createticket" element={<CreateTicket/>}/>
                </Route>

              </Route>
              
          </Routes>
    </div>
  );
}

export default App;
