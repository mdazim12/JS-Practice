import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    console.log(option)
    const {name, price,features} = option;
 
    return (
        <div className='m-4 shadow-2xl p-5 rounded-md flex flex-col'>
            <h2 className='my-2'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>

            <h4 className='text-4xl'>{name}</h4>

            <div className='flex-grow'>
                {
                    features.map((feature,idx) => <Feature key={idx} feature = {feature}></Feature>)
                }
            </div>

            <button className='btn my-2'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;