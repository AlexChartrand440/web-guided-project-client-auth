import React from "react";
import { Redirect, Route } from 'react-router-dom';

// Private route requirements:
// 1. It has the same API (interface) as <Route/>
// 2. If an auth token exists, it renders a <Route/> and passes all props through to the component
// 3. Otherwise, redirect to the login page

// take the component prop, rename it Component (capitalized so that it'll render in JSX) and assign the rest of the props to a variable called "rest"
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(componentProps) => {
        // if the token is in localStorage, render the component
        if (localStorage.getItem("token")) {
          console.log("token found, rendering component");
          return <Component {...componentProps} />
        }

        // Otherwise, redirect to login
        else {
          console.log("no token found, redirect to login");
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default PrivateRoute;