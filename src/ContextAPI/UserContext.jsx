import React, {createContext, useState} from 'react'
export const UserContext = createContext({})
const UsersProvider =({children}) =>{
       const [users,setUsers] = useState([
         { id:1,userName:'Rana Sikder'},
         {id:2,userName:'Abir'}
        
       ]);
       return  <UserContext.Provider value={{users,setUsers}}>
        {children}
              
       </UserContext.Provider>
     
}
export default UsersProvider ;
