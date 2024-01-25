import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirectUrl }) => {
  const { hasStorage } = useContext(AuthContext);
  if (!hasStorage) {
    return <Navigate to={redirectUrl} />;
  }
  return component;
};

export default PrivateRoute;
