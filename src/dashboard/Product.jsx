import React, { useState } from 'react'
import Menu from './component/Menu'
import './product-card.css'
import { FaStar} from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Product = () => {
    const [hide,setHide] = useState(true)
  return (
    <div>
        <Menu/>
       
       <div  className='nahid-container'>
       
       
         <img className="nahid-pc" src="/src/nahid.png" alt="" />
         
         <div className="nahid-text-one"><span>Nahid Hasan</span></div>
         <div className="nahid-text-two"><span>UX/UI Designer</span></div>
         <div className="star">
              <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaRegStar/></span>
              </div>
              <div className="pa">
                <p>UI is the saddle, the stirrups, & the reins.UX is</p>
                <p> the feeling you get being able to ride the horse.</p>
                
              </div>
           <div className="nahid-follow">
           <button>Follow</button>
           </div>
           <div className="nahid-followers">
            <div className="post">
              <span>5896</span>
              <p>Post</p>
            </div>
            <div className="followers">
                <span>8952</span>
                <p>Followers</p>
            </div>
            <div className="likes">
                <span>6545</span>
                <p>Likes</p>
            </div>
            
           </div>
    
       </div>
       
    </div>
  )
}

export default Product
