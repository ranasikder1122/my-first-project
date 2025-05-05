import React from 'react'
import { useUsersContext } from '../hook/useUsersContext';
const User = ({user}) => {
    const {id,userName} =user;
    const handleDelete =(id)=>{
        handleDeleteUser(id)
    }
   const  {users,setUsers} = useUsersContext();
  
    const handleDeleteUser =(id)=>{
      const filterUsers = users.filter(user=>user.id!==id)
      setUsers(filterUsers)
    
    }
  
  return (
    <article className='user'>
      <h2>{id}</h2>
      <p>{userName}</p>
      <button onClick={()=>{handleDelete(id)}} className='btnDelete'>Delete</button>
    </article>
  )
}

export default User