/*
useState()= re-renders components when the state value changes

useRef() = "use Reference" does not cause re-render when the sate value changes
            When you want a componet to "remember" some information
            but you don't want that info to triggers new render.

1. Accesing/Interacting with DOM elements
2. Handling Focus, Animation and Transitions
3. Managing Timers and Intervals
*/

import React, {useState, useEffect, useRef} from 'react'

function UseRef() {

    //let [number, setNumber] = useState(0);

    //const ref = useRef(0);

    //console.log(ref);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log("COMPONENT RENDER");
        //console.log(inputRef);
    },[]);

    function handleClick1(){
        //setNumber(n => n + 1); for useState()

        //ref.current = ref.current + 1 ;//or ref.current ++;
        //console.log(ref.current);

        inputRef1.current.focus();

        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
       
        inputRef2.current.focus();

        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
  
        inputRef3.current.focus();

        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

  return (
    <div>
   <button onClick={handleClick1}>
        CLICK ME #1!
   </button>
   <input ref={inputRef1} />

   <button onClick={handleClick2}>
        CLICK ME #2 !
   </button>
   <input ref={inputRef2} />

   <button onClick={handleClick3}>
        CLICK ME #3!
   </button>
   <input ref={inputRef3} />
   </div>
  )
}

export default UseRef