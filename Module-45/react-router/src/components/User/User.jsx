import PropTypes from "prop-types";

const User = ({ user }) => {

    const {name,email,phone} = user;

    return (
        <div className="box">
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object
}



export default User;