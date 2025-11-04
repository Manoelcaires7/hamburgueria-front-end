import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
const [userInfo, setUserInfo] = useState({id:1, name:'Manoel'});

return(
    <UserContext value={{userInfo}}>
        {children}
    </UserContext>
);
};


export const useUser = () =>{
    const context = useContext(UserContext);

    if(!context) {
        throw new Error('useUser must be a valid context')
    }

    return context;

};