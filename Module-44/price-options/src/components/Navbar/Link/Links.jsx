import PropTypes from "prop-types";

const Links = ({ route }) => {
    return (
        <div>
            <li>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};


Links.propTypes = {
    route:PropTypes.object
}

export default Links;