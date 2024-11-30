import { useState } from "react";
import { data, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadUsers = useLoaderData();

    const [users, setUsers] = useState(loadUsers);

    const handleDelete = _id => {
        console.log(_id)

        fetch(`http://localhost:5000/users/${_id}` , {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0) {
                alert('delected successfully');
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining);
            }
        })

    }

    return (
        <div>
            this is uers page : {users.length}

            {
                users.map(user => <p 
                    key={user._id}>
                    {user.name} : {user.email}
                    {user._id} 
                    <button onClick={
                        ()=> handleDelete(user._id)
                    }>Delete</button>
                    </p>)
            }
        </div>
    );
};

export default Users;