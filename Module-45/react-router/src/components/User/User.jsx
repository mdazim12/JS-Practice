import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {

    const {id,name,email,phone} = user;

    return (
        <div className="box">
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <Link className="show" to = {`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object
}



export default User;