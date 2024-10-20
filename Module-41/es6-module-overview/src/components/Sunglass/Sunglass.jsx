import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, devideTheFristNumberByTheSecondNumber as devide} from '../../Utils/Calculator';
// import add from '../../Utils/Calculator';

const Sunglass = () => {

    const Sunglass = () =>{
        const frist = 55;
        const secound = 20;
        const sum = add(frist, secound);
        const multi = multiply(frist, secound);
        const vag = devide(frist, secound);
    }

    
        

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;