import { createContext, useContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {


  return (
    <MyContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        posts,
        setPosts,
        users,
        setUsers,
        userForDetail,
        setUserForDetail,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
