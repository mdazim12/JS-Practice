import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadUser = useLoaderData();
    console.log(loadUser);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name,email)
    }


    return (
        <div>
            <h3>Update information of { loadUser.name }</h3>

            <form onSubmit={handleUpdate}>

                <input type="text" name="name" id="" defaultValue={loadUser?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loadUser?.email} />
                <br />
                <input type="submit" value="Update User" />

            </form>

        </div>
    );
};

export default Update;