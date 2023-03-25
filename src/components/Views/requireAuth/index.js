import React, { Component } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const requireAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const [cookies] = useCookies(['jwt_token']);
    const navigate = useNavigate()
    console.log(cookies.jwt_token.jwt_token)

    if (cookies.jwt_token.jwt_token) {
      return <WrappedComponent {...props} />;
    } else {
      // Redirect to login page if user is not authenticated
      return navigate('/login');
    }
  };

  return AuthenticatedComponent;
};

export default requireAuth;
