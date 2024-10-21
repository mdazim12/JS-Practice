import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addLS, getStoredCart } from "../../../public/Utility/localStorage";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // load local storge data

    useEffect(()=>{
        console.log('call the use effect',bottles.length);
        if(bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            const saveCart = [];

            for(const id of storedCart){
                console.log(id)

                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }

            
            setCart(saveCart);
        }

    },[bottles])


    const handleAddToCart = bottles =>{
        const newCart = [...cart, bottles];
        setCart(newCart);
        addLS(bottles.id)
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