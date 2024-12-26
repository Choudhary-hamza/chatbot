import { createContext, useCallback, useState } from "react";

export const UserContext = createContext({
  userData: null,
  addData: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const addData = useCallback((data) => {
    setUserData(data);
  });
  return (
    <UserContext.Provider value={{ userData, addData }}>
      {children}
    </UserContext.Provider>
  );
};
