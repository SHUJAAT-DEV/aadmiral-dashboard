import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);
  return (
    <Route
      {...rest}
      render={(props) =>
     
        localStorage.getItem("token") ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
