import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    const [name, handleNameChange] = useInputState('Rojoni')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data:', name)
       
    }

    return (
        <div>
            <div onSubmit={handleSubmit}>
                <form>
                    <input  onChange={handleNameChange} type="text" name="name" />
                    <br />
                    <input type="email" name="email" />
                    <input type="submit" value="Sumnit" />
                </form>
            </div>
        </div>
    );
};

export default HookForm;