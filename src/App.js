import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

useEffect(()=>{

  const sessionUser = sessionStorage.getItem('user');
  setLoggedInUser(JSON.parse(sessionUser));

},[])

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
