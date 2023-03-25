import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const ProtectedRoutes=({children })=>{
  const [cookies] = useCookies(['jwt_token']);

  if (cookies.jwt_token) {
    return children;
  }
  else {
    <Navigate to='/login'/>
  }

  // return isLogged?<Outlet/>:<Navigate to="/login"/>
}
export default ProtectedRoutes;

