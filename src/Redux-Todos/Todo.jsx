import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from './todosSlice';

const Todo = () => {
    const [text,setText] = useState('');
    const [edit,setEdit] = useState(null);
    const todos =useSelector((state)=>state.todos)
    const dispatch =useDispatch();
    useEffect(()=>{
       const savedTodos =JSON.parse(localStorage.getItem('todos')) || [];
       if(savedTodos.length > 0 ){
        savedTodos.forEach((todo)=>{
            dispatch({
                type:'todos/loadFromStorage',
                payload:todo,
            })

        })
       }
    },[dispatch]);
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos]);
    const handleAddTodos =()=>{
        if(text.trim()){
          if(edit) {
            dispatch(removeTodo(edit));
            dispatch(addTodo(`${text} (edited)`));
            setEdit(null)
          }
          else{
            dispatch(addTodo(text))
          }
        setText('') 
        }
}
const handleEditTodo =(todo)=>{
    setText(todo.text);
    setEdit(todo.id)

}
  return (
    <div  className='min-h-screen bg-gray-100 flex flex-col items-center py-10 '>
        <h1 className='text -4xl font-bold mb-5'>Redux Todo App</h1>
        <div className='w-11/12 max-w-4xl space-y-4 '>
            <div className='flex items-center space-x-3 '>
                  <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Your Todo List'
                  className='flex-grow px-4 py-2 border rounded-md focus:outline-none'/>
                  <button className='px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600' 
                  onClick={handleAddTodos}>{edit ?'Edit Todo':'Add Todo'}</button>
            </div>
            <div>
               <ul className='bg-white rounded-lg shadow p-5 space-y-4  mb-6 '>
                  {todos.map((todo)=>(
                    <li key={todo.id} className={`flex justify-between items-center p-3 rounded-lg shadow-md 
                        ${todo.completed ? 'bg-green-100' : 'bg-green-50'}`}>
                            <div className={`flex flex-col cursor-pointer 
                                ${todo.completed ?"line-through" : 'text-gray-500'}`} onClick={()=> dispatch(toggleTodo(todo.id))}>
                                    <span>{todo.text}</span>
                                    <span>{new Date(todo.id).toLocaleString()}</span>

                            </div>
                            <div className='flex space-x-3'>
                                <button className='px-3 py-1 bg-yellow-400 text-white rounded-lg 
                                hover:bg-yellow-500 ' onClick={()=>handleEditTodo(todo)}>Edit</button>
                                <button className='px-3 py-1 bg-red-500 rounded-lg
                                hover:bg-red-600' onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
                            </div>
                        </li>
                  ))}

               </ul>
            </div>
        </div>
        

    </div>
  )
}

export default Todo