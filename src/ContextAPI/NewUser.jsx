import React, { useState} from 'react'
import { useUsersContext } from '../hook/useUsersContext';

const NewUser = () => {
    const  {setUsers} = useUsersContext();
    const [userName,setUserName] = useState('');
    const handleUserNameChange = (e)=>{
        setUserName(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const newUser = {id: new Date().getTime().toString(),userName:userName};
        handleAddNewUser (newUser);
        setUserName('')
    }
    const handleAddNewUser =(user)=>{
        setUsers(prevUser => [...prevUser,user])
};

  return (
    <div className='userReg'>
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
            <input className='inputStyle' type="text" name='userName' value={userName} onChange={handleUserNameChange} required/>
            <button className='btnStyle' type='submit'>Add User</button>
        </form>

    </div>
  )
}

export default NewUser