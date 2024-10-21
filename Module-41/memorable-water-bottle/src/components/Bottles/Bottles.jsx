import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])


    const handleAddToCart = bottles =>{
        const newCart = [...cart, bottles];
        setCart(newCart);
    }

    return (
        <div>
            <h4>Hi I AM Bottles : {bottles.length}</h4>
            <h4>Cart : {cart.length}</h4>
            
        <div className="bottle-container"> 
            {
                bottles.map(bottle => <Bottle 
                    key= {bottle.id} 
                    bottle ={bottle}
                    handleAddToCart = {handleAddToCart}
                    ></Bottle> )
            }

        </div>

        </div>
    );
};

export default Bottles;