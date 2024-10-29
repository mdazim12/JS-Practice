import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const {id,title,body} = post;
    const navigate = useNavigate()

    const handleShowDetils = () => {
       navigate(`/post/${id}`)
    }

    return (
        <div className="box-2">
            <h3>{id}</h3>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <Link to = {`/post/${id}`}>
                <button>Show Details</button>
            </Link>

            <button onClick={handleShowDetils}>Click to more details</button>
        </div>
    );
};

export default Post;