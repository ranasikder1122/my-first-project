import React,{useContext}from 'react'
import { UserContext } from './UserContext'

const Component4 = () => {
  const {user,test} = useContext(UserContext);
  console.log(user)
  return (
    <div>
              <h1>{test.p}</h1>
                  <p>{user.id}</p>
                 <p>{user.name}</p>

                 

    </div>
  )
}

export default Component4