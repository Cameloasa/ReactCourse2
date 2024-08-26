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


import React from 'react'

function ComponentUseEffect() {
  return (
    <div>ComponentUseEffect</div>
  )
}

export default ComponentUseEffect