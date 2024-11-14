import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";


const Register = () => {


    const handleRegister = (event) => {
    
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            console.log(result.user)
        })
        .catch(error => console.log('ERROR' ,error))

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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register Now</button>
                    </div>
                </form>
            </div>

        </div>
    );


};

export default Register;