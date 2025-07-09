// import React from 'react'

// import Users from './ContextAPI/Users'
// import NewUser from './ContextAPI/NewUser';
// import UsersProvider from './ContextAPI/UserContext';
// const App = () => {
//   return (
//    < UsersProvider>
//     <div>
//       <NewUser/>
//       <Users />
//     </div>
//    </ UsersProvider >
//   )
// }

// export default App



// import Stats from './Redux/Stats'
// import Counter from './Redux/Counter'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from './features/counters/countersSlice'
// import Posts from './Posts'

// const App = () => {
//   const counters =useSelector((state)=>state.counters)
//   const dispatch =useDispatch()
  
//   const handleIncrement = (counterId)=>{
//        dispatch(increment(counterId))
     
       
// }
// const  handleDecrement = (counterId)=>{

//           dispatch(decrement(counterId))
// }
// const totalCount = counters.reduce((sum,current)=> sum + current.value,0)
// console.log(counters)

//   return (
//     <div className='w-screen h-auto p-10  bg-gray-100 text-slate-700'>
//       <h1 className='max-w-md mx-auto text-center text-2xl font-bold ' >Simple Count Aplication</h1>
//       <div className='max-w-md mx-auto mt-10 space-y-5'>
//         {
//          counters.map(counter => <Counter count={counter.value}
//           key={counter.id} 
//          onIncrement={()=>handleIncrement(counter.id)} onDecrment={()=>handleDecrement(counter.id)}/>)
//         }
//         <Stats count ={totalCount}/>
//         <Posts/>

//       </div>
//     </div>
//   ) 
// }

// export default App
import React from 'react'
import Todo from './Redux-Todos/Todo'

const App = () => {
  return (
    <div>
      <Todo/>
    </div>
  )
}

export default App