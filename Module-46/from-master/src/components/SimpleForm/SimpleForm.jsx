

const SimpleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value)
        
    }

    return (
        <div onSubmit={handleSubmit}>
            <form>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <input type="submit" value="Sumnit" />
            </form>
        </div>
    );
};

export default SimpleForm;