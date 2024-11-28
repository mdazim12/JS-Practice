import { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);

  const handleFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user), 
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUser((prevUsers) => [...prevUsers, data]);
        form.reset();
      })
      .catch(err => console.error("Error adding user:", err));
  };

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <>
      <h1>User Management Client Side</h1>
      <h1>Total number of users: {users.length}</h1>

      <form onSubmit={handleFrom}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="Add user" />
      </form>

      <div>
        {users.map((user, index) => (
          <p key={user.id || index}>
            {user.id}: {user.name} {user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
