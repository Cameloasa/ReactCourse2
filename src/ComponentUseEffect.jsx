/*
useEffect()= React HOOK that tells REACT DO SOME CODES when
    This component re-renders
    This component mounts
    The state of a value 

UseEffect(function, [dependencies])
1.useEffect (() => {}) => Runs after every re-render
2.useeffect (() => {},[]) => Runs only one mount
3.useEffect (() => {},[value]) => Runs one mount + when value changes

USES:
#1 Event listener
#2 DOM manipulation
#3 Subscriptions (real-times updates)
#4 Fetching data from an API
#5 Clean up when a component unmounts
*/


import React, {useState,useEffect} from 'react'

function ComponentUseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    //useEffect(function,[dependencies]);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`

        return()=>{
            //SOME CLEANUP CODE
        }
    },[count,color]);

    function addCount () {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green" );
    }

  return (
    <div>
        <p style={{color : color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default ComponentUseEffect