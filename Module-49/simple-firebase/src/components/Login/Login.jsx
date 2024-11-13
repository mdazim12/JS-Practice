import { GoogleAuthProvider } from "firebase/auth/web-extension";


const Login = () => {



    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        console.log('hello')
    }



    return (
        <div>
            <button onClick={handleGoogleSignIn} >Login with google</button>
        </div>
    );
};

export default Login;