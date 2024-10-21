import React from 'react';
import './Watch.css'

const Watch = ({watch}) => {
    const {name, price} = watch;
    return (
        <div>
           <h4> Wacth: {name} </h4>
           <p>Price : {price}</p>
        </div>
    );
};

export default Watch;