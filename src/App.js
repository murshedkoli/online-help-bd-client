import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './Component/Home';
import Login from './Component/Login';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute';
import UserProfile from './Component/User/UserProfile';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Recharge from './Component/User/Recharge';
import RechargeArea from './Component/User/RechargeArea';
import Voucher from './Component/Voucher';
import UserList from './Component/UserList';
import NotFoundPage from './Component/NotFoundPage';

export const userContext = createContext();

function App() {
  
const [loggedInUser, setLoggedInUser] = useState({});

// const sessionUserEmail = sessionStorage.getItem('email');

// useEffect(()=>{

//   fetch('https://onlinehelpbd.herokuapp.com/loggedUser?email='+ sessionUserEmail)
//           .then(res => res.json())
//           .then(data => {
//             setLoggedInUser(data)
           
//           })

// },[sessionUserEmail])

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]} >

    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Home></Home>
        </PrivateRoute>

        <PrivateRoute path="/deshboard">
          <Home></Home>
        </PrivateRoute>

        <PrivateRoute path="/profile">
          <UserProfile></UserProfile>
        </PrivateRoute>

        <PrivateRoute path="/neworder">
          <PlaceOrder/>
        </PrivateRoute>

        <Route path="/login">
          <Login/>
        </Route>

        <PrivateRoute path="/recharge">
          <Recharge/>
        </PrivateRoute>

        <PrivateRoute path="/update-recharge">
          <RechargeArea/>
        </PrivateRoute>

        <PrivateRoute path="/addvoucher">
          <Voucher/>
        </PrivateRoute>

        <PrivateRoute path="/users">
          <UserList/>
        </PrivateRoute>

        <Route path="/*">
          <NotFoundPage/>
        </Route>


      </Switch>
    </Router>

    </userContext.Provider>
  );
}

export default App;
