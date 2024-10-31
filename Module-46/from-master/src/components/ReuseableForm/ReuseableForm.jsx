

const ReuseableForm = () => {

    const handleSubmit = e => {
        e.praventDefault()
        e.praventDefault()
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

export default ReuseableForm;