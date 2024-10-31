

const ReuseableForm = ({formTitle,children,handleSubmit, submitBtnText = 'Submit'}) => {

    const handlelocalSubmit = e => {
        e.preventDefault()
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
        }
        handleSubmit(data)
    }

    return (
        <div onSubmit={handlelocalSubmit}>
           
            {children}

            <form>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;