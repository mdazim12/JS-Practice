import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";


const Feature = ({feature}) => {
    
    return (
        <div className='flex gap-2 items-center my-2'>
            <FaCheckCircle className='text-blue-600' />
            <p>{feature}</p>
            
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.array
}

export default Feature;