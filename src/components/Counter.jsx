import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, resetAll } from '../redux/CounterSlice';

const Counter = () => {
    const {count}=useSelector((state)=>state.count)
    console.log(count);
    const dispatch=useDispatch()
    const [counter,setCounter]=useState(0)
    const addValue=Number(counter)
    const reset=()=>{
        setCounter(0)
        dispatch(resetAll())
    }
    return (
        <>
         <div className="counter">
             <p>{count}</p>
            <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <input type="text"
            value={counter}
            onChange={(e)=>setCounter(e.target.value)}
            />
            <div>
                <button className="btn" onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button className="btn" onClick={reset}>Reset</button>
            </div>
         </div>
        </>
    )
}

export default Counter
