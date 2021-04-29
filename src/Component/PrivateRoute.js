import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../App";

function PrivateRoute({ children, ...rest }) {


    const [loggedInUser] = useContext(userContext);

    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedInUser ? (
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