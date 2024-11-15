import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const Register = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const [sucees,setSucess] = useState(false);
    const [showPassword, setShowPassword] = useState(false)


    const handleRegister = (event) => {
    
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;

        setErrorMessage('')
        setSucess(false)


        if(password.length < 6){
            setErrorMessage('Password would be more 6 charactrs')
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;

        if(!regex.test(password)) {
            setErrorMessage('At least one Uppercase , lowercase , special charater');
            return;
        }


      

        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            console.log(result.user)
            
            setSucess(true)
        })
        .catch((error) => {
            console.log(error.message)
            setErrorMessage(error.message)
            errorMessage()
            setSucess(false)
        })

    }




    return (
        <div className = "max-w-lg mx-auto">
           <h2 className="py-7 text-3xl text-center font-bold">Register Now</h2>

            <div onSubmit={handleRegister} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                
                <form  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" required />
                        
                        <button onClick={()=> setShowPassword(!showPassword)} className="absolute top-14 right-5" >
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye /> 
                            }
                            
                            </button>
                        
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register Now</button>
                    </div>

                    {
                        errorMessage && <p className="text-red-500">{errorMessage}</p>
                    } 

                    {
                        sucees && <p className="text-green-500 text-center font-medium">Succesfully Create User</p>
                    }
                </form>
            </div>

        </div>
    );


};

export default Register;