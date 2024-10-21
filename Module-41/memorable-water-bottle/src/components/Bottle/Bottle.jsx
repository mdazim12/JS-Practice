import './Bottle.css'


const Bottle = ({ bottle , handleAddToCart }) => {
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <h3> Name : {name} </h3>
            <h3>Price : {price} </h3>
            <img src={img} alt="" />
            <br/>
            <button onClick={()=> handleAddToCart(bottle)}>Buy</button>
        </div>
    );
};

export default Bottle;