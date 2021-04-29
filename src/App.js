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

export const userContext = createContext();

function App() {
  
const [loggedInUser, setLoggedInUser] = useState({});
console.log(loggedInUser)
const sessionUserEmail = sessionStorage.getItem('email');

useEffect(()=>{

  fetch('http://localhost:5000/loggedUser?email='+ sessionUserEmail)
          .then(res => res.json())
          .then(data => {
            setLoggedInUser(data)
           
          })

},[sessionUserEmail])

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


      </Switch>
    </Router>

    </userContext.Provider>
  );
}

export default App;
