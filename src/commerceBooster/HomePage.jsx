import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { IoChevronUp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const HomePage = () => {
  return (
<div className='flex h-dvw bg-gray-200 justify-center items-start m-0 p-0'>
<div className='w-23.43 bg-white'>
      <div className='flex justify-center p-6 space-x-4 mt-4'>
        <img src="/src/menu.png" alt="" />
        <img src="/src/logotype.png" alt="" />
        <img src="src/Group 2.png" alt="/" />
    </div>
    <div className='flex justify-center items-center h-16 bg-grayCode-300 '>
   <div className='flex '>
   <span className=' flex absolute ml-[16px] mt-[15px] text-[#1071FF]'>{<IoIosSearch/>}</span>
   <input className='flex p-3 px-16 text-left text-sm  rounded-md placeholder-gray-400'type="text" placeholder='Search by product or SKU'/>
   </div>
    </div>
      <h1 className='flex justify-center mt-[44px] font-bold text-2xl '>Our brands</h1>
      <div className='flex justify-center space-x-10 mt-[24px]'>
        <img className='  shadow-md p-4' src="/src/image.png" alt="" />
        <img className=' shadow-md p-4' src="/src/image (1).png" alt="" />
        <img className='shadow-md p-4' src="/src/image (2).png" alt="" />
      </div>
      <div className='flex justify-center flex-row mt-[56px] space-x-3'>
      <button className='flex justify-items-center text-[#1071FF] '>Show all brands</button>
      <span className='mt-[5px] text-[#1071FF] '>{< FiArrowRight />}</span>
      </div>
      <h2 className='flex justify-center mt-[56px] font-bold text-2xl'>Recommended products</h2>
     <div className='flex flex-row justify-center space-x-[15px] mt-[24px]'>
      {/* rana sikder */}
     <div className=' shadow-md rounded-md'>
     <span className='absolute bg-[#FF7E27] mt-[8px]'>-30%</span>
     <span className=' flex ml-[135px] mt-[8px] bg-grayCode-300 text-[#1071FF] p-1 rounded-full 
     absolute '>{<CiStar />}</span>
      <img className=' absolute mt-[86.75px] ml-[140.25px]'src="/src/compare.png" alt="" />
        <img src="/src/product image.png" alt="" />
        <div className='flex rounded-sm flex-row space-x-1 p-1 shadow-md absolute mt-[-30px] ml-1'>
          <img className='text-[10px]' src="/src/check.png" alt="" />
          <span className='text-[#00893A] text-[10px]'>In stock </span>
        </div>
        <span className='absolute text-[#1071FF] mt-[-25px] ml-[140px]' >{<IoShareSocialOutline/>}</span>
        <p className='text-gray-500 pl-2 mt-[8px]'>Omnires | Part No. 
          <br/>2123532</p>
          <p className='text-[16px] pl-2 font-bold mt-[8px]'>Connection with a 
            <br/>handle Omnires 
            <br/>round</p>
            <div className='pl-2 space-x-2 text-[#1071FF] mt-[8px]'>
              <span className='text-[14px] font-semibold
                               '>your price</span>
              <span className='text-[25px] font-semibold
                             '>$45.00 </span>
            </div>
            <span className='text-[#1071FF] font-semibold pl-2'>net</span>
            <del className=' flex pl-2 text-[#FF7E27] text-[14px]'>$55.00 net</del>
            <div className='pl-2 mt-[7px]'>
              <span className='p-1 py-0 pt-0.5 shadow-md rounded-sm'>1</span>
              <div className='flex  mt-[-23px] ml-[20px] text-sm'>
              <span className='text-[#1071FF]  absolute ml-[35px] mt-[4px] text-sm'>{<AiOutlineDown />}</span>
               <span className=' shadow-md px-5 pl-1  text-sm rounded-sm'>Item</span>
                </div> 
              </div>
              <div className='flex justify-center mt-[8px] '>
                
                <button className='flex  text-white text-[14px] pl-1.5 p-2 px-6 shadow-md 
                 font-medium rounded-3xl bg-[#1071FF]
                '>Add to cart</button>
                <span className='flex absolute font-medium ml-[80px] mt-[12px] text-white 
                text-[14px]'>{<AiOutlineDown />}</span>
              </div> 
            
      </div>
      <div className='shadow-md'>
      <span className='absolute bg-[#FF7E27] mt-[8px]'>-30%</span>
     <span className=' flex ml-[135px] mt-[8px] bg-grayCode-300 text-[#1071FF] p-1 rounded-full 
     absolute '>{<CiStar />}</span>
      <img className=' absolute mt-[86.75px] ml-[140.25px]'src="/src/compare.png" alt="" />
        <img src="/src/product image (1).png" alt="" />
        <div className='flex rounded-sm flex-row space-x-1 p-1 shadow-md absolute mt-[-30px] ml-1'>
          <img className='text-[10px]' src="/src/check.png" alt="" />
          <span className='text-[#00893A] text-[10px]'>In stock </span>
        </div>
        <span className='absolute text-[#1071FF] mt-[-25px] ml-[140px]' >{<IoShareSocialOutline/>}</span>
        <p className='text-gray-500 pl-2 mt-[8px]'>Omnires | Part No. 
          <br/>2123532</p>
          <p className='text-[16px] pl-2 font-bold mt-[8px]'>Countertop 
            <br/>washbasin 
            <br/>GoodHome Tekapo</p>
            <div className='pl-2 space-x-2 text-[#1071FF] mt-[8px]'>
              <span className='text-[14px] font-semibold
                               '>your price</span>
              <span className='text-[25px] font-semibold
                             '>$51.00 </span>
            </div>
            <span className='text-[#1071FF] font-semibold pl-2'>net</span>
            <del className=' flex pl-2 text-[#FF7E27] text-[14px]'>$64.00 net</del>
            <div className='pl-2 mt-[7px]'>
              <span className='p-1 py-0 pt-0.5 shadow-md rounded-sm'>1</span>
              <div className='flex  mt-[-23px] ml-[20px] text-sm'>
              <span className='text-[#1071FF]  absolute ml-[35px] mt-[4px] text-sm'>{<AiOutlineDown />}</span>
               <span className=' shadow-md px-5 pl-1  text-sm rounded-sm'>Item</span>
                </div> 
              </div>
              <div className='flex justify-center mt-[8px] mb-[12px]'>
                
                <button className='flex  text-white text-[14px] pl-1.5 p-2 px-6 shadow-md 
                 font-medium rounded-3xl bg-[#1071FF]
                '>Add to cart</button>
                <span className='flex absolute font-medium ml-[80px] mt-[12px] text-white 
                text-[14px]'>{<AiOutlineDown />}</span>
              </div>
     
      </div>
     </div>
      <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px]'> 
        <button>Show all recommended products</button>
      <span className=' text-[32px]'>{<FiArrowRight/>}</span>
      </div>
      <div className='bg-[#2580FF] h-[331px] mt-[64px] hover:scale-105'>
        <br/>
      <img className='ml-[128px] ' src="/src/image (3).png" alt="" />
       <div className='flex flex-col'>
       <span className='flex justify-center mt-[8px] text-[48px] text-white font-extrabold'>-20% </span>
       <span className='flex mt-[4px] justify-center text-white font-extrabold text-[36px]'>on power tools</span>
      <div className=' flex justify-center  '>
      <button className=' mt-[12px] p-8 py-3 text-[#1071FF] rounded-3xl text-[14px] 
      font-medium shadow-md bg-white'>Check offer</button>
      </div>
       </div> 
      </div> 
        <span className='flex justify-center text-[24px] font-bold mt-[64px]
        '>Recommended categories</span>
        <div className='flex justify-center space-x-3 mt-[24px]'>
          <div className=''>
            <img src="/src/image (4).png" alt="" />
            <span className='flex bg-[#1071FF] w-[164px] h-[58px] justify-center items-center
            rounded-b-md font-bold text-white text-[16px]'>Photovoltaics</span>
          </div>
          <div>
          <img src="/src/image (5).png" alt="" />
            <span className='flex bg-[#1071FF] w-[164px] h-[58px] justify-center items-center
            rounded-b-md font-bold text-white text-[16px]'>Electronics</span>
          </div>
          
        </div>
        <div className='flex justify-center space-x-3 mt-[16px]'>
          <div className=''>
            <img src="/src/image (6).png" alt="" />
            <span className='flex bg-[#1071FF] w-[164px] h-[58px] justify-center items-center
            rounded-b-md font-bold text-white text-[16px]'>Light Sources</span>
          </div>
          <div>
          <img src="/src/image (7).png" alt="" />
            <span className='flex bg-[#1071FF] w-[164px] h-[58px] justify-center items-center
            rounded-b-md font-bold text-white text-[16px] text-center'>Ventilation and Heating</span>
          </div>
          
        </div>
        <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px]'> 
        <button>Show all categories</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
      <header className='flext text-center text-[24px] mt-[64px] font-extrabold
      '>Hints for you</header>
       
       <div className=' flex justify-center mt-[24px] '>
    <div className='shadow-md rounded-md' >
    <img src="/src/image (8).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[16px]
         '>How much does it cost to finish an </span>
         <div>
          <span className='pl-2 font-bold text-[16px]'>apartment?</span>
         </div>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>Are you standing on the threshold of your </span>
          <span>own "M", to which you have just picked up </span>
          <span>the keys, and with the eye...</span>
         </div>
         <div className='flex pl-2 text-[#1071FF] font-medium space-x-2 mt-[20px] mb-[20px]'> 
        <button className='text-[14px]'>Read more</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
    </div>
       </div>
       {/* rana sikder */}
       <div className=' flex justify-center mt-[24px] '>
    <div className='shadow-md rounded-md' >
    <img src="/src/image (9).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[16px]
         '>Demolition of the load-bearing wall </span>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>Are you planning a home renovation or </span>
          <span>renovation? Your vision is limited by the</span>
          <span>the load-bearing wall, which you...</span>
         </div>
         <div className='flex pl-2 text-[#1071FF] font-medium space-x-2 mt-[20px] mb-[37px]'> 
        <button className='text-[14px]'>Read more</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
    </div>
       </div>
       <div className=' flex justify-center mt-[24px] '>
    <div className='shadow-md rounded-md' >
    <img src="/src/image (10).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[16px]
         '>What color to paint a hall in a block of  </span>
         <div>
          <span className='pl-2 font-bold text-[16px]'>flats?</span>
         </div>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>Matching the right paint is a real challenge. </span>
          <span> If you are wondering what color to paint  </span>
          <span>your hall with, you can...</span>
         </div>
         <div className='flex pl-2 text-[#1071FF] font-medium space-x-2 mt-[20px] mb-[20px]'> 
        <button className='text-[14px]'>Read more</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
    </div>
       </div>
       <div className=' flex justify-center mt-[24px] '>
    <div className='shadow-md rounded-md' >
    <img src="/src/image (11).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[16px]
         '>How does a concrete pump work?</span>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>A concrete pump is currently one of the </span>
          <span>most common equipment used on</span>
          <span>construction sites. Its operation...</span>
         </div>
         <div className='flex pl-2 text-[#1071FF] font-medium space-x-2 mt-[20px] mb-[37px]'> 
        <button className='text-[14px]'>Read more</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
    </div>
       </div>
       <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px]'> 
        <button>Show all hints</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
      <div className='flex justify-center mt-[64px]'>
      <img  src="/src/image (12).png" alt="" />
      </div>
      <div className=' ml-3 py-[40px] px-2 rounded-md mt-[8px] w-[343px] h-[300px] bg-[#1071FF]'>
        <div className='text-white  text-[24px] font-bold'>
          <span>Buy this bundle and save <br/>$100!</span>
        </div>
        <div className='text-white font-normal text-[18px] mt-[16px]'>
          <span>Longer sentence, for just two lines </span>
          <span>and it could be very very long</span>
        </div>
        <div className=' flex justify-center  '>
      <button className=' mt-[32px] p-8 py-3 text-[#1071FF] rounded-3xl text-[14px] 
      font-medium shadow-md bg-white'>Buy this bundle</button>
      </div>

      </div>
      <div className='flex flex-row justify-center mt-[64px]'>
        <div className='flex justify-center items-center text-[16px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[172px] h-[193px]'>
        New tool kits!
        </div>
        <img src="/src/image (13).png" alt="" />
      </div>
      <div className='flex flex-row justify-center mt-[8px]'>
        <div className='flex justify-center items-center text-[16px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[172px] h-[193px]'>
        New rules for <br/>wind farms!
        </div>
        <img src="/src/image (14).png" alt="" />
      </div>
      <div className='flex flex-row justify-center mt-[8px]'>
        <div className='flex justify-center items-center text-[16px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[172px] h-[193px]'>
        New iPhone <br/>now available!
        </div>
        <img src="/src/image (15).png" alt="" />
      </div>
       <div className='bg-[#F6F8FB] h-[550px] mt-[64px] py-[32px] px-2'>
       <div className='flex flex-col text-[28px] font-black'>
        <span className='flex justify-center'>DPD delivery already</span>
        <span className='flex justify-center'>available!</span>
        <div className='text-[16px] font-normal mt-[24px]'>
          <p className='flex justify-center'>
          Choose DPD for speed, ease and
          </p> 
         <p className='flex justify-center'> convenience.</p>
           <p className='flex justify-center'>Track your parcel in real time. This will help</p> 
          <p className='flex justify-center'> you plan your work while waiting for the </p>
           <p className='flex justify-center'>parcel.</p>
          
        </div>
        <div className=' flex justify-center mt-[24px] '>
      <button className=' p-8 py-3 text-white rounded-3xl text-[14px] 
      font-medium shadow-md bg-[#1071FF]'>Show more</button>
      </div>
      <img className='mt-[32px]' src="/src/image (16).png" alt="" />
        </div>
       </div>
       <header className='flext text-center text-[24px] mt-[64px] font-bold
      '>Events for you</header>
      {/* Rana sikder */}
       <div className=' flex justify-center mt-[24px] '>
        
    <div className='shadow-md rounded-md' >
    <img src="/src/image (17).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[16px]
         '>Electrician course for electricians </span>
         <div>
          <span className='pl-2 font-bold text-[16px]'> with SEP licence</span>
         </div>
         </div>
         <div className='mt-[16px]'>
         <span className='pl-2 text-[#1071FF] text-[14px] font-normal'>
         23.05.2021 | London, UK</span>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>This course is conducted in the form </span>
          <span> of lectures via the Internet and ends </span>
          <span>with an examination, also online... </span>
         </div>
         <div className=' flex  mt-[16px] mb-[26px] pl-2'>
      <button className=' ring-2 ring-[#1071FF] p-6 py-2 text-[#1071FF] rounded-3xl text-[14px] 
      font-medium  bg-white'>Know more</button>
      </div>
    </div>
       </div>
       <div className=' flex justify-center mt-[8px] '>
        
        <div className='shadow-md rounded-md' >
        <img src="/src/image (18).png" alt="" />
             <div className='mt-[16px]'>
             <span className='pl-2 font-bold text-[16px]
             '>Electrician course for electricians </span>
             </div>
             <br/>
             <div className='mt-[16px]'>
             <span className='pl-2 text-[#1071FF] text-[14px] font-normal'>
             04-06.11.2021 | London, UK</span>
             </div>
             <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
              <span>This course is conducted in the form </span>
              <span> of lectures via the Internet and ends </span>
              <span>with an examination, also online... </span>
             </div>
             <div className=' flex  mt-[16px] mb-[26px] pl-2'>
          <button className=' ring-2 ring-[#1071FF] p-6 py-2 text-[#1071FF] rounded-3xl text-[14px] 
          font-medium  bg-white'>Know more</button>
          </div>
        </div>
           </div>
           <div className=' flex justify-center mt-[8px] '>
        
        <div className='shadow-md rounded-md' >
        <img src="/src/image (19).png" alt="" />
             <div className='mt-[16px]'>
             <span className='pl-2 font-bold text-[16px]
             '>AutoCAD 2d basic level</span>
             </div>
             <br/>
             <div className='mt-[16px]'>
             <span className='pl-2 text-[#1071FF] text-[14px] font-normal'>
             15.06.2021 | London, UK</span>
             </div>
             <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
              <span>This course is conducted in the form </span>
              <span> of lectures via the Internet and ends </span>
              <span>with an examination, also online... </span>
             </div>
             <div className=' flex  mt-[16px] mb-[26px] pl-2'>
          <button className=' ring-2 ring-[#1071FF] p-6 py-2 text-[#1071FF] rounded-3xl text-[14px] 
          font-medium  bg-white'>Know more</button>
          </div>
        </div>
           </div>
           <div className=' flex justify-center mt-[24px] '>
        
        <div className='shadow-md rounded-md' >
        <img src="/src/image (20).png" alt="" />
             <div className='mt-[16px]'>
             <span className='pl-2 font-bold text-[16px]
             '>Paving engineer with a road </span>
             <div>
              <span className='pl-2 font-bold text-[16px]'> construction machine licence</span>
             </div>
             </div>
             <div className='mt-[16px]'>
             <span className='pl-2 text-[#1071FF] text-[14px] font-normal'>
             31.03.2021 | London, UK</span>
             </div>
             <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
              <span>This course is conducted in the form </span>
              <span> of lectures via the Internet and ends </span>
              <span>with an examination, also online... </span>
             </div>
             <div className=' flex  mt-[16px] mb-[26px] pl-2'>
          <button className=' ring-2 ring-[#1071FF] p-6 py-2 text-[#1071FF] rounded-3xl text-[14px] 
          font-medium  bg-white'>Know more</button>
          </div>
        </div>
           </div>
           <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px]'> 
        <button>Show all events</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
          <div className='bg-[#F6F8FB] pl-2 pt-[24px] pb-[16px] pr-2 mt-[64px]'>
          
            <span className='text-[16px] font-bold'>Sign up for news</span>
            
               <div className='text-[14px] font-normal mt-[16px]'>
               <p>Keep up to date with the latest product launches </p>
                 <p>and news. Find out more about our brands and get </p>
                  <p>   special promo codes.</p>
               </div>
               <div className='flex flex-col space-y-[16px] mt-[16px]'>
                  <input className='py-3 placeholder:px-2 placeholder:py-1.5
                  rounded-md px-2 placeholder:text-[16px]' type="email" placeholder='Your e-mail address' />
                  <button className='bg-[#1071FF] p-3 text-white font-medium rounded-md'>Sign up for newsletter</button>
                  <div className='space-x-2'>
                   <input className='text-[14px]' 
                   type="checkbox" />
                   <span className='text-[14px] font-normal'>I accept</span>
                  <span className=' text-[14px] font-normal text-[#1071FF]'>
                     the personal data management.</span>
                  </div>
               </div>
          </div>
          <div className='bg-[#F6F8FB]'>
            <hr/>
            <div className='flex justify-between pl-2 pt-[16px] pr-2 text-[16px] font-bold'>
             <span className='text-[#1071FF] '>How to buy</span>
             <span>{< IoChevronUp/>}</span>
            </div>
              <div className='flex flex-col mt-[16px] space-y-1.5 pl-2 
              mb-[24px] font-normal text-[14px]'>
               <span>Payment methods</span>
               <span>Order and pick up</span>
               <span>Order with delivery</span>
               <span>Shopping over the phone</span>
               <span>Returns</span>
              </div>
               <hr/>
               <div className='flex px-2 justify-between text-[16px] 
               mb-[17.5px] font-bold mt-[17.5px]'>
                 <span>Help</span>
                 <span>{<FaChevronDown/>}</span>
               </div>
               <hr/>
               <div className='flex px-2 justify-between text-[16px] 
               mb-[17.5px] font-bold mt-[17.5px]'>
                 <span>Services</span>
                 <span>{<FaChevronDown/>}</span>
               </div>
               <hr/>
               <div className='flex px-2 justify-between text-[16px] 
               mb-[17.5px] font-bold mt-[17.5px]'>
                 <span>About</span>
                 <span>{<FaChevronDown/>}</span>
               </div>
               <hr/>
               <div className='flex justify-center space-x-3 mt-[40px]'>
                <span>{<RiFacebookCircleFill />}</span>
                <span >{<FaSquareInstagram />}</span>
                <span>{<IoLogoYoutube/>}</span>
               </div>
                <div className='flex justify-center mt-[24px] font-bold' >
                <img src="/src/logotype.png" alt="" />
                </div>
                <div className='flex justify-center space-x-2 text-[#434447] 
                text-[14px] mt-[40px]'>
                  <div className='w-4 h-4 bg-white ring-2 rounded-full flex
                   justify-center items-center font-normal'>
                     c
                  </div>
                  <span className='font-normal mb-[16px] '>2021 Divante S.A.</span>
                </div>
          </div>

      </div>
       
    </div>
   
  );
};

export default HomePage