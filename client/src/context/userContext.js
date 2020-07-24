import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await axios.get("/api/user");

    const user = res.data;

    return setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
