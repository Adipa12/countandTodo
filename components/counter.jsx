import { useState } from "react";

export const Counter =() =>{
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Counter App</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}