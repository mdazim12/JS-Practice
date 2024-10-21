
const Bottle = ({ bottle }) => {
    const {name, price, img} = bottle;
    console.log(bottle)
    return (
        <div>
            <h3> Name : {name} </h3>
            <h3>Price : {price} </h3>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;