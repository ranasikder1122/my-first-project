import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './UserContext'


const Component1 = () => {
  const [user,setUser] = useState({id:101,name:'Rana sikder'})
  const [test,setTest] = useState({p:'Hello baby'})
  return (
  <UserContext.Provider value={{user,test}}> 
  <Component2/> 
  </UserContext.Provider>
  )
}

export default Component1