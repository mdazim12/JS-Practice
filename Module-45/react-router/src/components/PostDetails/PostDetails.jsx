import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

    const PostDetails = useLoaderData();
    const {id,title} = PostDetails;
    const navigate = useNavigate()


    const handleGoBack = () =>{
       navigate(-1)
    }
 
    return (
        <div>
            <h2>This is Post Details</h2>
            <h3>Post Id: {id}</h3>
            <h3>{title}</h3>
            <button onClick={handleGoBack}>Go Back </button>
        </div>
    );
};

export default PostDetails;