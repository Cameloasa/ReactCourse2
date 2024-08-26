import React, {useState, createContext} from 'react'
import ComponentB from './ComponentB'

/*
useContext() = React Hook that allows you to share values
            between multiple levels of components
            whihout passing props through each level

PROVIDER COMPONENT
1. import useContext() from REACT
2. export const MyContext = createContext();
3. <Mycontext.Provider value = {value}>
    <Child />
    </ Mycontext.Provider>

CONSUMER COMPONENT
1. import React, {useContext} from React
   import {MyContext} from`./ComponentA´
2. const value = useContext(MyContext);


*/

export const UserContext = createContext();

function ComponentA() {

  const [user, setUser] = useState("BugsBunny");
  
  return (
    <div className='box'>
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
          <ComponentB user={user}/>
        </UserContext.Provider>
        
        
    </div>
  )
}

export default ComponentA