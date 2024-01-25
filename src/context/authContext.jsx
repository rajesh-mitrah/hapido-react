import { createContext, useState } from 'react';
import { getStorage } from 'services/storage';

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [hasStorage, setHasStorage] = useState(getStorage('authToken'));
  return <AuthContext.Provider value={{ hasStorage, setHasStorage }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
