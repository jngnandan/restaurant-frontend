import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const requireAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const [cookies] = useCookies(['jwt_token']);
    const navigate = useNavigate();

    console.log('crazy', cookies.jwt_token.jwt_token);
    
    useEffect(() => {
      if (!cookies.jwt_token.jwt_token) {
        // Redirect to login page if user is not authenticated
        navigate('/login', { replace: true });
      }
    }, [cookies.jwt_token, navigate]);

    return cookies.jwt_token.jwt_token ? <WrappedComponent {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default requireAuth;
