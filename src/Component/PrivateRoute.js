import { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../App";

function PrivateRoute({ children, ...rest }) {


const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
const sessionUserEmail = sessionStorage.getItem('email');

useEffect(()=>{

  fetch('http://localhost:5000/loggedUser?email='+ sessionUserEmail)
          .then(res => res.json())
          .then(data => {
            setLoggedInUser(data)
           
          })

},[sessionUserEmail, setLoggedInUser])

    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedInUser!=={} && sessionUserEmail ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;