import { useState } from "react";


const StatefullForm = () => {

    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [error,setError] = useState('')
 
    const handleSubmit = e => {
        e.preventDefault();

        if(password.length < 5){
            setError('password must be 6 charahtar')
        }
        else{
            setError('')
            console.log(name,email,password)
        }
       
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleName = e => {
        setName(e.target.value);
    }



    return (
        <div>
            <div onSubmit={handleSubmit}>
                <form>
                    <input onChange={handleName}  type="text" name="name" />
                    <br />
                    <input onChange={handleEmailChange}  type="email" />
                    <br />
                    <input onChange={handlePassword} type="password" name="password" />
                    <input type="submit" value="Sumnit" />
                    {
                        error && <p>{error}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default StatefullForm;