import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>   
            This is all post card page: {posts.length}

            <div className="main-box">
                {
                    posts.map(post => <Post key={post.id} post = {post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;