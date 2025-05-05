import React from 'react'

import Users from './ContextAPI/Users'
import NewUser from './ContextAPI/NewUser';
import UsersProvider from './ContextAPI/UserContext';
const App = () => {
  return (
   < UsersProvider>
        <div>
      <NewUser/>
      <Users />
    </div>
   </ UsersProvider >
  )
}

export default App
