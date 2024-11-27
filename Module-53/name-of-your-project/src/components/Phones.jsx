import { useLoaderData } from "react-router-dom";



const Phones = () => {

    const data = useLoaderData()

    return (
        <div>
            this is all phone: {data.length}
        </div>
    );
};

export default Phones;