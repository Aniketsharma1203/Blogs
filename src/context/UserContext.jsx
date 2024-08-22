import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({children}) {
  const[objectContainer,setObjectContainer] = useState([]);
  return (

      <UserContext.Provider value={{objectContainer,setObjectContainer}}>
   {children}
      </UserContext.Provider>

   
  );
}

