import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'context/authContext';

const PublicRoute = ({ component, redirectUrl }) => {
  const { hasStorage } = useContext(AuthContext);

  return !hasStorage ? component : <Navigate to={redirectUrl} />;
  // return component ? component : <Navigate to={redirectUrl} />;
};

export default PublicRoute;
