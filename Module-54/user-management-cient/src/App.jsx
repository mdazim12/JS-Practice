import { useEffect, useState } from "react"


function App() {

  const [users, setUser] = useState([]);

  const handleFrom = (e)=> {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const pass = form.pass.value;
      const user = {name,pass}
      fetch('http://localhost:5000/users' , {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      console.log(user)
  }

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])





  return (
    <>
     
      <h1>User Management Client Side</h1>
      <h1>Total number of userr is : {users.length}</h1>


      <form onSubmit={handleFrom}>
        <input type="text" name="name" id="" /> 
        <br />
        <input type="password" name="pass" id="" />
        <br />
        <input type="submit" value="Add user" />
      </form>

      <div>
          {
            users.map(user => <p key={user.id}> {user.id} : {user.name} {user.email} </p> )
          }
    
      </div>
     
    </>
  )
}

export default App
