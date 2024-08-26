import React, {useEffect, useState} from 'react'

function UseEffect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added:")

        return () => {
            window.removeEventListener("resize",handleResize);
            console.log("Event listener removed");
        }
    },[]);

    useEffect(() => {
        document.title = `Size ${width} x ${height}`;
    }, [width,height]);

   

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


  return (
    <div>
        <p>Window Width: {width}px</p>
        <p>Window height: {height}px</p>
    </div>
  )
}

export default UseEffect