import { Link } from "react-router-dom";


const Post = ({post}) => {

    const {id,title,body} = post;

    return (
        <div className="box-2">
            <h3>{id}</h3>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <Link to = {`/post/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;