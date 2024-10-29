import { useLoaderData } from "react-router-dom";


const PostDetails = () => {

    const PostDetails = useLoaderData();
    const {id,title} = PostDetails;

    return (
        <div>
            <h2>This is Post Details</h2>
            <h3>Post Id: {id}</h3>
            <h3>{title}</h3>
        </div>
    );
};

export default PostDetails;