import { useState } from "react"

export default function(){
    const [count, setCount] = useState(0);

    const addHandelar = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const reduceHandelar = () =>{
        const newReduce = count - 1;
        setCount(newReduce);
    }

    return(
        <div style={{border: '2px solid red'}}>
            <h3>Counter : {count} </h3>
            <button onClick={addHandelar}>Add</button>
            <button onClick={reduceHandelar}>Reduce</button>
        </div>
    )
}