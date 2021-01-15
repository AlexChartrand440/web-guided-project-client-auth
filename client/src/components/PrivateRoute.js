import React from "react";
import { Redirect, Route } from 'react-router-dom';

// Private route requirements:
// 1. It has the same API (interface) as <Route/>
// 2. If an auth token exists, it renders a <Route/> and passes all props through to it
// 3. Otherwise, redirect to the login page

const PrivateRoute = () => {
  return (
    <Route render={(props) => {
      // if the token is in localStorage, render the component
      if (localStorage.getItem("token")) {
        return <Component {...props} />
      }

      // Otherwise, redirect to login
      else {
        return <Redirect to="/login"
      }
    }
    }

    />
  )
}