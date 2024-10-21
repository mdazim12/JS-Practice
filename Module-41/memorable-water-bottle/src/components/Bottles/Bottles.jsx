import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    return (
        <div>
            <h4>Hi I AM Bottles : {bottles.length}</h4>
            {
                bottles.map(bottle => <Bottle key= {bottle.id} bottle ={bottle}></Bottle> )
            }
        </div>
    );
};

export default Bottles;