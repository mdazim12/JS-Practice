import { createContext } from "react";



 export const AuthProvider = ({children}) => {

    const AuthContext = createContext(null) 

    const AuthInfo = {
        name : 'Demo name',
    }
    

    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




















