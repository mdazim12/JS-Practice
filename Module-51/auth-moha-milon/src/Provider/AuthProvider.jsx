import { createUserWithEmailAndPassword } from "firebase/auth";
import  { createContext } from "react";
import auth from "../firebase.init";



 export const AuthContext = createContext(null) ;

 const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
   

    const AuthInfo = {
        createUser
    }
    

    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




















