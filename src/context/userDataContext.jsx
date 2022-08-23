import { createContext, useContext, useState } from "react";

const userDataContext = createContext();

export const UserDataProvider = props =>{
    const {children} = props;
    const [getUserData,setUserData] = useState();
    return(
        <userDataContext.Provider value={{getUserData,setUserData}}>
            {children}
        </userDataContext.Provider>
    )
}
export const useUserData = () => useContext(userDataContext);