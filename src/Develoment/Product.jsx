import { useState } from 'react'
import './Form.css'

const Product = () => {
    const [list,setList] = useState([])
    const [item,setItem] =useState({title:'',description:'',filter:'All'})
   
  function data(e){
      setItem({...item,[e.target.name]:e.target.value})
  }
  const {title,description,filter}=item;
    function formSubmit(){
        setList([...list,{title,description,filter:'Pending'}])
        console.log(item)
        setItem({title:"",description:"",filter:"All"}) 
    }
    function deleteValue(i){
       let total =[...list]
       total.splice(i,1)
       setList(total)
    }
    function editValue(i) {
        const editItem = list[i];
        setItem(editItem);
        deleteValue(i);
      }
      function markAsComplete(i) {
        const updatedList = list.map((a, index) =>
          index === i ? { ...a, filter: "Completed" } : a
        );
        setList(updatedList);
      }
  // console.log(list,'total list')
  return (
    <div>
        <div className="form-container">
            <div className="home">
               <ul>
                <li>Home</li>
               </ul>
            </div>
            <div className="bg-blue">
                <div className="title">
               <label htmlFor="">TITLE</label>
               <input onChange={data} value={item.title ||""}  type="text"name='title'/>
          
                </div>
                <div className="des">
                    <label htmlFor="">DESCRIPTION</label>
                    <textarea  onChange={data}value={item.description ||""}type="text"name='description'></textarea>
                </div>
               <div className="btn"> <button onClick={formSubmit} disabled={!item.title || !item.description}>submit</button></div>

            </div>
            <div className="filter">
                <label htmlFor="">FILTER</label>
                <select onChange={ data}  value={item.filter ||"All"} name='filter' className='sec'>
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option  value="Complete">Completed</option>
                </select>
            </div>
            <div className="value-show">
            <br/>
               {
                list && list.map(
                    (a,i)=>{
                        return(
                        <div className='output' key={i}>
                         
                           <div className="valu-show-all">
                           <p> {a.filter}</p>
                          <span> {a.title}</span>
                          <header> {a.description} </header>
                          <div className="butt-style">
                           <button onClick={()=>deleteValue(i)}>Delete</button>
                            <button  onClick={() => editValue(i)}>Edit</button>
                            <button onClick={() => markAsComplete(i)}>Complete</button>
                            
                           </div>
                        
                           </div>
                           <br/>
                           
                        </div>
                        )
                    }
                )
               }
               
            </div>
            <br/>
            <br/>
        </div>
        </div>
  )
}

export default Product