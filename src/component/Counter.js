import React, { useState } from 'react'
import "./Counter.css"
const Counter = () => {
    const [counter,setCounter]  = useState(0);
    const [input, setInput] = useState("")

    const buttonClickHandler = () =>{
    setCounter(previosCounter => previosCounter + 1)
    
   
  
    
      //  console.log("I was clicked " + counter++);
        
    }
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    }
    const increamentByHandler = () => {
        setCounter(prevCouunter => prevCouunter + Number(input))
    }    // const decreaseButton = () => {
    //     setCounter(p => p> 0? p-1:p)
    // }
   
  return (
    <div>
        <p>
            counter : {counter} </p>
            <button className='counter__button'onClick={buttonClickHandler}>Increament</button>
       
            <p>
            counter : {counter} </p>
            <button className='counter__button'onClick={()=> setCounter(p => p> 0? p-1:p)}>Decreament</button>
            <div>
                
    <input placeholder='enter a number' type="number" min="0" value={input} onChange={inputChangeHandler}>
            </input>
            <button className='counter__button' onClick={increamentByHandler}>Increament By</button>
    
    </div>

    </div>
  )
}

export default Counter