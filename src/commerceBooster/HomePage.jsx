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
import { MdOutlineCall } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
const HomePage = () => {
  return (
<div className='flex h-dvw bg-gray-200 justify-center items-start m-0 p-0'>
<div className='w-23.43 bg-white xl:w-[1440px] '>   
               <div className='hidden xl:contents w-[1440px] '>
               <div className='flex justify-between bg-[#F6F8FB] px-[88px] py-[12px]'>
               <div className='flex flex-row  space-x-[16px] text-[#0C0C0C]  '>
                 <div className='flex flex-row space-x-1 text-[14px] font-normal'>
                 <span>Country: Sweden</span>
                 <span className='mt-[4px]'>{<FaChevronDown/>}</span>
                 </div>
                 <div className='flex flex-row space-x-1 text-[14px] font-normal'>
                 <span>Language: Svenska</span>
                 <span className='mt-[4px]'>{<FaChevronDown/>}</span>
                 </div>
                 <div className='flex flex-row space-x-1 text-[14px] font-normal'>
                 <span>Currency: $</span>
                 <span className='mt-[4px]'>{<FaChevronDown/>}</span>
                 </div>
                                 
                </div>
                <div className='flex flex-row  space-x-[16px]'> 
                <div className='flex flex-row space-x-1 text-[14px] font-semibold 
                text-[#1071FF] border-r-2 border-[#434447] pr-3 '>
                <span className='mt-[4px] '>{<MdOutlineCall/>}</span>
                 <span >+32 (0) 15 28 76 67</span>
                 </div >

                 <div className='flex flex-row space-x-1 text-[14px] font-normal  border-r-2 border-[#434447]
                  pr-3 '>
                 <span className='mt-[4px]'>{<MdForwardToInbox />}</span>
                 <span>Messages</span>
                 </div>
                 <div className='flex flex-row space-x-1 text-[14px] font-normal'>
                 <span className='mt-[4px]'>{<FaRegUserCircle/>}</span>
                 <span>Username Surname</span>
                 <span className='mt-[4px]'>{<FaChevronDown/>}</span>
                 
                 </div>
                </div>
               </div>
               </div>
               <div className='hidden xl:contents '>
                  <div className='flex justify-around  py-[26px]'>
                  <img className=' mt-[12px] absolute mr-[1065px]' src="/src/logotype.png" alt="" />
                  <div className='flex shadow-md rounded-sm w-[543px] h-[48px]'>
   <span className=' flex  ml-[16px] mt-[15px] text-[#1071FF]'>{<IoIosSearch/>}</span>
   <input className='flex  px-[100px] text-left text-sm  rounded-md placeholder-gray-400  outline-none'type="text" placeholder='Search by product or SKU'/>
   </div>
   <div className=' absolute mt-[-4px] ml-[1065px]'>
      <button className=' px-[32px] py-[14px] text-white rounded-3xl text-[16px] 
      font-medium shadow-md bg-[#1071FF]'>Quick Order Form</button>
      </div>
                  </div>
               </div>
               {/* Responsive*/}
               <div className='hidden xl:contents '>
               <div className='flex justify-between bg-[#F6F8FB] px-[88px] items-center'>
               <div className='flex flex-row  space-x-[64px] text-[#0C0C0C]  '>
                 <div className='flex flex-row space-x-1 text-[14px] font-semibold'>
                 <span>HOME & GARDEN</span>
                 <span className='mt-[4px]'>{<FaChevronDown/>}</span>
                 </div>
                 <div className='flex flex-row space-x-1 text-[14px] font-semibold'>
                 <span>MOTORS</span>
                 <span className='mt-[4px]'>{<FaChevronDown/>}</span>
                 </div>
                 <div className='flex flex-row space-x-1 text-[14px] font-semibold'>
                 <span>ELECTRONICS</span>
                 <span className='mt-[4px]'>{<FaChevronDown/>}</span>
                 </div>
                 <div className='flex flex-row space-x-1 text-[14px] font-semibold'>
                 <span>OFFICE EQUIPMENT</span>
                 <span className='mt-[4px]'>{<FaChevronDown/>}</span>
                 </div>
                
                </div>
                <div className='flex flex-row pt-[32px] pb -[4px] space-x-[29px]'> 
                <div className='flex  text-[14px] font-semibold text-[#1071FF]'>
                <img className='absolute mt-[-18px] ml-[22px]' src="/src/compare.png" alt="" />
                 <span >COMPARE</span>
                 </div >

                 <div className='flex  text-[14px] text-[#1071FF] font-semibold  '>
                 <span className='absolute mt-[-18px] ml-[22px]' >{<CiStar />}</span>
                 <span>FAVORITES</span>
                 </div>
                 <div className='flex flex-col text-[14px] text-[#1071FF]'>
                 <span className='absolute mt-[-18px]  ml-[42px]'>{<AiOutlineShoppingCart/>}</span>
                 <span className='ml-[34px] font-semiblod'>CART</span>
                 <span className='pb-[4px]'>Active Cart Name</span>
               
                 
                 </div>
                </div>
               </div>
               </div>
               <div className='hidden xl:contents '>
                <div className='flex flex-row justify-between pl-[88px] pr-[88px]'>
                <h1 className='flex  font-bold text-2xl mt-[40px] text-[28px]'>Our brands</h1>
               <div className='flex  flex-row mt-[46px] space-x-3'>
             <button className='flex text-[#1071FF] '>Show all brands </button>
            <span className='mt-[5px] text-[#1071FF] '>{< FiArrowRight />}</span>
             </div>
                </div>
                     
               </div>

      <div className='flex justify-center p-6 space-x-4  mt-4 xl:hidden'>
        <img src="/src/menu.png" alt="" />
        <img src="/src/logotype.png" alt="" />
        <img src="src/Group 2.png" alt="/" />
    </div>
    <div className='flex justify-center items-center h-16 bg-grayCode-300 xl:hidden '>
   <div className='flex '>
   <span className=' flex absolute ml-[16px] mt-[15px] text-[#1071FF]'>{<IoIosSearch/>}</span>
   <input className='flex p-3 px-16 text-left text-sm  rounded-md placeholder-gray-400'type="text" placeholder='Search by product or SKU'/>
   </div>
    </div>
      <h1 className='flex justify-center mt-[44px] font-bold text-2xl xl:hidden'>Our brands</h1>
      <div className='flex justify-center space-x-10 mt-[24px] xl:mt-[32px] xl:flex xl:justify-start xl:pl-[88px]
      '>
         <img className=' xl:hidden  shadow-md p-4' src="/src/image.png" alt="" />
        <img className=' xl:hidden  shadow-md p-4' src="/src/image (1).png" alt="" />
        <img className=' xl:hidden  shadow-md p-4' src="/src/image (2).png" alt="" />
       <div className='hidden xl:contents space-x-[20px] pr-[88px]'>
       <img className=' shadow-md px-[77px] py-[16px]' src="/src/image (22).png" alt="" />
       <img className=' shadow-md  px-[77px] py-[16px]' src="/src/image (23).png" alt="" />
       <img className=' shadow-md px-[77px] py-[16px]' src="/src/image (24).png" alt="" />
       <img className=' shadow-md  px-[77px] py-[16px]' src="/src/image (25).png" alt="" />
       </div>
      </div>
       {/* responsive */}
       <div className='hidden xl:contents'>
       <div className='flex flex-row justify-between pl-[88px] pr-[88px] mt-[80px] ' >
       <h2 className='font-bold text-[28px] '>Recommended products</h2>
       <div className='flex flex-row space-x-3 mt-[6px]'>

         <button className='flex justify-items-center text-[#1071FF] '>Show all recommended products</button>
           <span className='mt-[5px] text-[#1071FF] '>{< FiArrowRight />}</span>
           </div>
       </div>
       </div>
      <div className='flex justify-center flex-row mt-[56px] space-x-3 xl:hidden'>

      <button className='flex justify-items-center text-[#1071FF] '>Show all brands </button>
      <span className='mt-[5px] text-[#1071FF] '>{< FiArrowRight />}</span>
      </div>
      <h2 className='flex justify-center mt-[56px] font-bold text-2xl xl:hidden'>Recommended products</h2>
      {/* Resposive */}
     <div className='flex flex-row justify-center space-x-[15px] mt-[24px] xl:flex xl:justify-start xl:ml-[88px] xl:mt-[34px] xl:space-x-[20px] '>
      {/* Rana Sikder*/}
     <div className=' shadow-md rounded-md'>
     <span className='absolute bg-[#FF7E27] mt-[8px] xl:text-[20px]'>-30%</span>
     <span className=' flex ml-[135px] mt-[8px]  bg-grayCode-300 text-[#1071FF] p-1 rounded-full xl:p-1
     absolute xl:ml-[261.5px] xl:text-[24px]'>{<CiStar />}</span>
      <img className=' absolute mt-[86.75px] ml-[140.25px] xl:ml-[267px] xl:mt-[165px] xl:w-[18px] xl:h-[22px]'src="/src/compare.png" alt="" />
        <img className='xl:hidden' src="/src/product image.png" alt="" />
       <div className='hidden xl:contents' >
       <img className='' src="/src/product image (2).png" alt="" />
       </div>

        <div className='flex rounded-sm flex-row space-x-1 p-1 shadow-md absolute mt-[-30px] ml-1 xl:text-[24px] xl:mt-[-47px]'>
          <img className='text-[10px] ' src="/src/check.png" alt="" />
          <span className='text-[#00893A] text-[10px] xl:text-[14px]'>In stock </span>
        </div>
       
        <div className='xl:absolute xl:mt-[-20px]'><span className='absolute text-[#1071FF] mt-[-25px] ml-[140px]  xl:ml-[261.5px] xl:text-[24px]' >{<IoShareSocialOutline/>}</span></div>
        <p className='text-gray-500 pl-2 mt-[8px]'>Omnires | Part No. 
          <br/>2123532</p>
          <p className='text-[16px] xl:text-[20px] pl-2 font-bold mt-[8px]'>Connection with a 
            <br/>handle Omnires 
            <br/>round</p>
            <div className='pl-2 space-x-2 text-[#1071FF] mt-[8px]'>
              <span className='text-[14px] font-semibold
                               '>your price</span>
              <span className='text-[25px] font-semibold
                             '>$45.00 </span>
            </div>
            <span className='text-[#1071FF] font-semibold pl-2'>net</span>
            <del className=' flex pl-2 text-[#FF7E27] text-[14px] xl:text-[16px]'>$55.00 net</del>
            <div className='pl-2 mt-[7px] xl:mt-[15px] '>
              <span className='p-1 py-0 pt-0.5 shadow-md rounded-sm xl:py-[10px] xl:px-[24px]'>1</span>
              <div className='flex  mt-[-23px] ml-[20px] text-sm xl:ml-[70px] xl:mt-[-34px]'>
              <span className='text-[#1071FF]  absolute ml-[35px] mt-[4px] text-sm xl:ml-[60px] xl:mt-[12px]'>{<AiOutlineDown />}</span>
               <span className=' shadow-md px-5 pl-1  text-sm rounded-sm xl:px-[50px] xl:pl-[12px] xl:py-[10px]'>Item</span>
                </div> 
              </div>
              <div className='flex justify-center mt-[8px] xl:mt-[10px] xl:mb-[12px] mb-[10px]'>
                
                <button className='flex  text-white text-[14px] pl-1.5 p-2 px-6 shadow-md 
                 font-medium rounded-3xl bg-[#1071FF] xl:px-[104px] xl:py-[16px] xl:text-[16px]
                '>Add to cart</button>
                <span className='flex absolute font-medium ml-[80px] mt-[12px] text-white 
                text-[14px] xl:text-[16px] xl:ml-[110px] xl:mt-[20px]'>{<AiOutlineDown />}</span>
              </div> 
            
      </div>
      <div className=' shadow-md rounded-md '>
     <span className='absolute bg-[#FF7E27] mt-[8px] xl:text-[20px]'>-30%</span>
     <span className=' flex ml-[135px] mt-[8px]  bg-grayCode-300 text-[#1071FF] p-1 rounded-full xl:p-1
     absolute xl:ml-[261.5px] xl:text-[24px]'>{<CiStar />}</span>
      <img className=' absolute mt-[86.75px] ml-[140.25px] xl:ml-[267px] xl:mt-[165px] xl:w-[18px] xl:h-[22px]'src="/src/compare.png" alt="" />
        <img className='xl:hidden' src="/src/product image (1).png" alt="" />
       <div className='hidden xl:contents' >
       <img className='' src="/src/product image (3).png" alt="" />
       </div>

        <div className='flex rounded-sm flex-row space-x-1 p-1 shadow-md absolute mt-[-30px] ml-1 xl:text-[24px] xl:mt-[-47px]'>
          <img className='text-[10px] ' src="/src/check.png" alt="" />
          <span className='text-[#00893A] text-[10px] xl:text-[14px]'>In stock </span>
        </div>
       
        <div className='xl:absolute xl:mt-[-20px]'><span className='absolute text-[#1071FF] mt-[-25px] ml-[140px]  xl:ml-[261.5px] xl:text-[24px]' >{<IoShareSocialOutline/>}</span></div>
        <p className='text-gray-500 pl-2 mt-[8px]'>Omnires | Part No. 
          <br/>2123532</p>
          <p className='text-[16px] xl:text-[20px] pl-2 font-bold mt-[8px]'>Connection with a 
            <br/>handle Omnires 
            <br/>round</p>
            <div className='pl-2 space-x-2 text-[#1071FF] mt-[8px]'>
              <span className='text-[14px] font-semibold
                               '>your price</span>
              <span className='text-[25px] font-semibold
                             '>$45.00 </span>
            </div>
            <span className='text-[#1071FF] font-semibold pl-2'>net</span>
            <del className=' flex pl-2 text-[#FF7E27] text-[14px] xl:text-[16px]'>$55.00 net</del>
            <div className='pl-2 mt-[7px] xl:mt-[15px] '>
              <span className='p-1 py-0 pt-0.5 shadow-md rounded-sm xl:py-[10px] xl:px-[24px]'>1</span>
              <div className='flex  mt-[-23px] ml-[20px] text-sm xl:ml-[70px] xl:mt-[-34px]'>
              <span className='text-[#1071FF]  absolute ml-[35px] mt-[4px] text-sm xl:ml-[60px] xl:mt-[12px]'>{<AiOutlineDown />}</span>
               <span className=' shadow-md px-5 pl-1  text-sm rounded-sm xl:px-[50px] xl:pl-[12px] xl:py-[10px]'>Item</span>
                </div> 
              </div>
              <div className='flex justify-center mt-[8px] xl:mt-[10px] xl:mb-[12px] mb-[10px]'>
                
                <button className='flex  text-white text-[14px] pl-1.5 p-2 px-6 shadow-md 
                 font-medium rounded-3xl bg-[#1071FF] xl:px-[104px] xl:py-[16px] xl:text-[16px]
                '>Add to cart</button>
                <span className='flex absolute font-medium ml-[80px] mt-[12px] text-white 
                text-[14px] xl:text-[16px] xl:ml-[110px] xl:mt-[20px]'>{<AiOutlineDown />}</span>
              </div> 
            
      </div>
      
     </div>
      <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px] xl:hidden'> 
        <button>Show all recommended products</button>
      <span className=' text-[32px]'>{<FiArrowRight/>}</span>
      </div>
      <div className='bg-[#2580FF] h-[331px] mt-[64px] xl:mt-[80px] xl:pl-[88px] xl:pr-[88px]'>
        <br/>
        <div className='hidden xl:contents'>
        <img className=' mt-[80px]' src="/src/image (26).png" alt="" />
        </div>
      <img className='ml-[128px] xl:hidden' src="/src/image (3).png" alt="" />
       <div className='flex flex-col xl:flex-row xl:justify-between'>  
      <div className='xl:flex xl:flex-row xl:ml-[160px] xl:mt-[-140px] xl:space-x-[16px]'>
      <span className='flex justify-center mt-[8px] text-[48px] text-white font-extrabold xl:text-[80px] xl:font-bold'>-20% </span>
      <span className='flex mt-[4px] justify-center text-white font-extrabold text-[36px]
       xl:text-[46px] xl:font-bold xl:mt-[33px] ' >on power tools</span>
      </div>
      <div className=' flex justify-center xl:mt-[-105px] xl:absolute xl:ml-[915px]'>
      <button className=' mt-[12px] p-8 py-3 text-[#1071FF] rounded-3xl text-[14px] 
      font-medium shadow-md bg-white xl:text-[16px] xl:px-[32px] xl:py-[16px]'>Check offer</button>
      </div>
       </div> 
      </div> 
     <div className='xl:flex  xl:pl-[88px] xl:pr-[88px] xl:justify-between xl:mt-[80px]'>
     <span className='flex justify-center text-[24px] font-bold mt-[64px]
       xl:text-[28px] '>Recommended categories</span>
     <div className='hidden xl:contents'>
     <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px] xl:text-[16px] xl:mt-[68px]'> 
        <button>Show all categories</button>
      <span className=' text-[24px] xl:mt-[7px]'>{<FiArrowRight/>}</span>
      </div>
     </div>
     </div>
        <div className='flex justify-center space-x-3 mt-[24px] xl:hidden'>
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
        <div className='flex justify-center space-x-3 mt-[16px] xl:hidden'>
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
         <div className='hidden xl:contents'>
         <div className='flex space-x-[20px] mt-[32px] pl-[88px] pr-[88px]'>
          <div>
            <img src="/src/image (27).png" alt="" />
            <span className='flex bg-[#1071FF] w-[301px] h-[74px] justify-center items-center
            rounded-b-md font-bold text-white text-[20px]'>Photovoltaics</span>
          </div>
          <div>
            <img src="/src/image (28).png" alt="" />
            <span className='flex bg-[#1071FF] w-[301px] h-[74px] justify-center items-center
            rounded-b-md font-bold text-white text-[20px]'>Electronics</span>
          </div>
          <div>
            <img src="/src/image (29).png" alt="" />
            <span className='flex bg-[#1071FF] w-[301px] h-[74px] justify-center items-center
            rounded-b-md font-bold text-white text-[20px]'>Light Sources</span>
          </div>
          <div>
            <img src="/src/image (30).png" alt="" />
            <span className='flex bg-[#1071FF] w-[301px] h-[74px] justify-center items-center
            rounded-b-md font-bold text-white text-[20px]'>Ventilation and Heating</span>
          </div>
         
          
        </div>
        
         </div>
        <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px] xl:hidden'> 
        <button>Show all categories</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
      <div className='xl:flex  xl:pl-[88px] xl:pr-[88px] xl:justify-between xl:mt-[80px]'>
     <span className='flex justify-center text-[24px] font-bold mt-[64px]
       xl:text-[28px] '>Hints for you</span>
     <div className='hidden xl:contents'>
     <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px] xl:text-[16px] xl:mt-[68px]'> 
        <button>Show all hints</button>
      <span className=' text-[24px] xl:mt-[7px]'>{<FiArrowRight/>}</span>
      </div>
     </div>
     </div>
         {/* responsive */}
         <div className='hidden xl:contents'>
            <div className='flex flex-row justify-around pl-[88px] pr-[88px] mt-[38px]'>
            <div className='shadow-md rounded-md ' >
    <img className='xl:w-[301px] xl:h-[170px]' src="/src/image (8).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[20px]
         '>How much does it cost to </span>
         <div>
          <span className='pl-2 font-bold text-[20px]'>  finish an apartment?</span>
         </div>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>Are you standing on the threshold of </span>
          <span>  your own "M", to which you have just </span>
          <span> picked up the keys, and with the eye...</span>
         </div>
         <div className='flex pl-2 text-[#1071FF] font-medium space-x-2 mt-[20px] mb-[20px]'> 
        <button className='text-[16px]'>Read more</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
         </div>
         <div className='shadow-md rounded-md' >
    <img className='xl:w-[301px] xl:h-[170px]'src="/src/image (9).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[20px]
         '>Demolition of the load- </span>
         <div className='pl-2 font-bold text-[20px]'>
          <span> bearing wall</span>
         </div>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>Are you planning a home renovation </span>
          <span> or  renovation? Your vision is limited</span>
          <span>  by the load-bearing wall, which you...</span>
         </div>
         <div className='flex pl-2 text-[#1071FF] font-medium space-x-2 mt-[20px] mb-[37px]'> 
        <button className='text-[16px]'>Read more</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
         </div>
          <div className='shadow-md rounded-md' >
    <img className='xl:w-[301px] xl:h-[170px]' src="/src/image (10).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[20px]
         '>What color to paint a hall in a </span>
         <div>
          <span className='pl-2 font-bold text-[20px]'>block of flats?</span>
         </div>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>Matching the right paint is a real  </span>
          <span> challenge. If you are wondering what   </span>
          <span> color to paint your hall with, you can...</span>
         </div>
         <div className='flex pl-2 text-[#1071FF] font-medium space-x-2 mt-[20px] mb-[20px]'> 
        <button className='text-[16px]'>Read more</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
         </div>
         <div className='shadow-md rounded-md' >
    <img className='xl:w-[301px] xl:h-[170px]' src="/src/image (11).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[20px]
         '>How does a concrete pump </span>
         <div>
          <span className='pl-2 font-bold text-[20px]'>work?</span>
         </div>
         </div>
         <div className='flex flex-col pl-2 font-normal text-[16px] mt-[16px]'>
          <span>A concrete pump is currently one of  </span>
          <span> the most common equipment used </span>
          <span> on construction sites. Its operation...</span>
         </div>
         <div className='flex pl-2 text-[#1071FF] font-medium space-x-2 mt-[20px] mb-[37px]'> 
        <button className='text-[16px]'>Read more</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
    </div>

            </div>

         </div>
       <div className=' flex justify-center mt-[24px] xl:hidden'>
    <div className='shadow-md rounded-md ' >
    <img className='xl:w-[301px] xl:h-[170px]' src="/src/image (8).png" alt="" />
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
       <div className=' flex justify-center mt-[24px] xl:hidden'>
    <div className='shadow-md rounded-md' >
    <img className='xl:w-[301px] xl:h-[170px]'src="/src/image (9).png" alt="" />
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
       <div className=' flex justify-center mt-[24px] xl:hidden'>
    <div className='shadow-md rounded-md' >
    <img className='xl:w-[301px] xl:h-[170px]' src="/src/image (10).png" alt="" />
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
       <div className=' flex justify-center mt-[24px] xl:hidden'>
    <div className='shadow-md rounded-md' >
    <img className='xl:w-[301px] xl:h-[170px]' src="/src/image (11).png" alt="" />
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
       <div className='xl:hidden flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px]'> 
        <button>Show all hints</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
      <div className='flex justify-center mt-[64px] xl:hidden'>
      <img  src="/src/image (12).png" alt="" />
      </div>
      <div className=' ml-3 py-[40px] px-2 rounded-md mt-[8px] w-[343px] h-[300px]
       bg-[#1071FF] xl:hidden'>
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
      {/* Responsive */}
      <div className='hidden xl:contents'>
        <div className='flex flex-row justify-between pl-[88px] pr-[88px] '>
        <div className='flex justify-center mt-[64px] '>
      <img  src="/src/image (32).png" alt="" />
      </div>
      <div className='pt-[75px] pl-[64px] rounded-md mt-[65px] w-[622px] h-[350px]
       bg-[#1071FF]'>
        <div className='text-white  text-[28px] font-bold'>
          <span>Buy this bundle and save $100!</span>
        </div>
        <div className='mt-[16px] text-white font-normal text-[20px] flex flex-col'>
          <span>Longer sentence, for just two lines </span>
          <span>and it could be very very long</span>
        </div>
        <div className='  '>
      <button className=' mt-[32px] px-[32px] py-[16px] text-[#1071FF] rounded-3xl text-[16px] 
      font-medium shadow-md bg-white'>Buy this bundle</button>
      </div>

      </div>
        </div>
      </div>

      <div className='flex flex-row justify-center mt-[64px] xl:hidden'>
        <div className='flex justify-center items-center text-[16px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[172px] h-[193px]'>
        New tool kits!
        </div>
        <img src="/src/image (13).png" alt="" />
      </div>
      <div className='flex flex-row justify-center mt-[8px] xl:hidden'>
        <div className='flex justify-center items-center text-[16px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[172px] h-[193px]'>
        New rules for <br/>wind farms!
        </div>
        <img src="/src/image (14).png" alt="" />
      </div>
      <div className='flex flex-row justify-center mt-[8px] xl:hidden '>
        <div className='flex justify-center items-center text-[16px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[172px] h-[193px]'>
        New iPhone <br/>now available!
        </div>
        <img src="/src/image (15).png" alt="" />
      </div>
          {/* Responsive */}
          <div className='hidden xl:contents'>
            <div className='flex flex-row justify-around pl-[88px] pr-[88px] gap-[20px] mt-[80px]'>
              
      <div className='flex flex-row justify-center'>
        <div className='flex justify-center items-center text-[20px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[204px] h-[230px]'>
        New tool kits!
        </div>
        <img src="/src/image (33).png" alt="" />
      </div>
      <div className='flex flex-row justify-center'>
        <div className='flex justify-center items-center text-[20px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[204px] h-[230px]'>
       New rules for <br/> wind farms!
        </div>
        <img src="/src/image (34).png" alt="" />
      </div>
      <div className='flex flex-row justify-center'>
        <div className='flex justify-center items-center text-[20px] font-bold 
       text-white bg-[#FF7E27] rounded-s-md w-[204px] h-[230px]'>
        New iPhone <br/> now available!
        </div>
        <img src="/src/image (35).png" alt="" />
      </div>
            </div>
          </div>
       <div className='bg-[#F6F8FB] h-[550px] mt-[64px] py-[32px] px-2 xl:hidden'>
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
       {/* Responsive */}
         <div className='hidden xl:contents'>
          <div className='flex justify-between bg-[#F6F8FB] h-[409px] mt-[80px] pl-[88px] pr-[88px]'>
            <div className='mt-[89px]'>
               <div className='text-[36px] font-bold '>DPD delivery already available!</div>
               <div className='text-[16px] font-normal mt-[24px]'>
                <p> Choose DPD for speed, ease and convenience.</p>
                <p>Track your parcel in real time. This will help  you plan</p>
                <p>your work while waiting for the parcel. </p>
               </div>
               <div className=' mt-[56px] '>
      <button className=' py-[16px] px-[32px] text-white rounded-3xl text-[16px] 
      font-medium shadow-md bg-[#1071FF]'>Show more</button>
      </div>
            </div>
            <img className=' mt-[40px] w-[622px] h-[329px]' src="/src/image (36).png" alt="" />
          </div>
         </div>
       <header className='flext text-center text-[24px] mt-[64px] font-bold
       xl:hidden'>Events for you</header>
         <div className='xl:flex  xl:pl-[88px] xl:pr-[88px] xl:justify-between xl:mt-[80px]'>
     <span className='flex justify-center text-[24px] font-bold mt-[64px]
       xl:text-[28px] '>Events for you</span>
     <div className='hidden xl:contents'>
     <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px] xl:text-[16px] xl:mt-[68px]'> 
        <button>Show all events</button>
      <span className=' text-[24px] xl:mt-[7px]'>{<FiArrowRight/>}</span>
      </div>
     </div>
     </div>
      {/* Rana sikder */}
      {/* Responsive */}
        <div className='hidden xl:contents'>
          <div className='flex flex-row pl-[88px] pr-[88px] mt-[32px] gap-[20px]'>
          <div className='shadow-md rounded-md' >
    <img className='w-[301px] h-[170px]' src="/src/image (17).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[20px]
         '>Electrician course for </span>
         <div>
          <span className='pl-2 font-bold text-[20px]'>electricians with SEP licence</span>
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
      <button className=' ring-2 ring-[#1071FF] py-[16px] px-[32px]   text-[#1071FF] rounded-3xl text-[16px] 
      font-medium  bg-white'>Know more</button>
      </div>
      </div>
      <div className='shadow-md rounded-md' >
      <img className='w-[301px] h-[170px]' src="/src/image (18).png" alt="" />
             <div className='mt-[20px]'>
             <span className='pl-2 font-bold text-[20px]
             '>Interior design and decoration</span>
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
      <button className=' ring-2 ring-[#1071FF] py-[16px] px-[32px]   text-[#1071FF] rounded-3xl text-[16px] 
      font-medium  bg-white'>Know more</button>
      </div>
      </div>
      <div className='shadow-md rounded-md' >
      <img className='w-[301px] h-[170px]' src="/src/image (19).png" alt="" />
             <div className='mt-[20px]'>
             <span className='pl-2 font-bold text-[20px]
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
      <button className=' ring-2 ring-[#1071FF] py-[16px] px-[32px]   text-[#1071FF] rounded-3xl text-[16px] 
      font-medium  bg-white'>Know more</button>
      </div>
      </div>
      <div className='shadow-md rounded-md' >
    <img className='w-[301px] h-[170px]' src="/src/image (20).png" alt="" />
         <div className='mt-[16px]'>
         <span className='pl-2 font-bold text-[20px]
         '>Paving engineer with a road </span>
         <div>
          <span className='pl-2 font-bold text-[20px]'>construction machine licence</span>
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
      <button className=' ring-2 ring-[#1071FF] py-[16px] px-[32px]   text-[#1071FF] rounded-3xl text-[16px] 
      font-medium  bg-white'>Know more</button>
      </div>
      </div>
       
          </div>

        </div>
       <div className=' flex justify-center mt-[24px] xl:hidden'>
        
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
       <div className=' flex justify-center mt-[8px]  xl:hidden '>
        
        <div className='shadow-md rounded-md' >
        <img src="/src/image (18).png" alt="" />
             <div className='mt-[16px]'>
             <span className='pl-2 font-bold text-[16px]
             '>Interior design and decoration</span>
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
           <div className=' flex justify-center mt-[8px]  xl:hidden '>
        
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
           <div className=' flex justify-center mt-[24px]  xl:hidden'>
        
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
           <div className='flex justify-center text-[#1071FF] font-medium space-x-2 mt-[24px]  xl:hidden'> 
        <button>Show all events</button>
      <span className=' text-[24px]'>{<FiArrowRight/>}</span>
      </div>
          <div className='bg-[#F6F8FB] pl-2 pt-[24px] pb-[16px] pr-2 mt-[64px] xl:hidden'>
          
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
          <div className='bg-[#F6F8FB] xl:hidden'>
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
                  <div className='w-5 h-5 bg-white border-2 border-black rounded-full  flex
                   justify-center items-center  font-bold mb-0.5'>
                     c
                  </div>
                  <span className='font-normal mb-[16px] '>2021 Divante S.A.</span>
                </div>
          </div>
          <div className='hidden xl:contents'>
            <div className='bg-[#F6F8FB]  mt-[100px] pl-[88px] pr-[88px] '>
             <div className='pt-[40px] pb-[40px] flex flex-row gap-[100px]'>
             <div className=''>
                 
                 <span className='text-[20px] font-bold'>Sign up for news</span>
                 
                 <div className='text-[16px] font-normal mt-[24px]'>
                 <p>Keep up to date with the latest product</p>
                   <p>  launches  and news. Find out more about our </p>
                    <p> brands and get  special promo codes.</p>
                 </div>
                 <div className='flex flex-col space-y-[16px] mt-[24px] gap-[16px] '>
                       <input className=' w-[280px] py-4 placeholder:px-2 placeholder:py-1.5
                       rounded-md px-2 placeholder:text-[20px] ' type="email" placeholder='Your e-mail address' />
                       <button className=' w-[280px] bg-[#1071FF] py-4 text-white font-medium rounded-3xl text-[20px]'>Sign up for newsletter</button>
                       <div className='space-x-2'>
                        <input className='text-[14px]' 
                        type="checkbox" />
                        <span className='text-[16px] font-normal'>I accept</span>
                       <span className=' text-[16px] font-normal text-[#1071FF]'>
                          the personal data management.</span>
                       </div>
                    </div>
                 
                   </div>
                 <div className='flex flex-row gap-[50px] '>
                 <div className=''>
                    <span className='text-[20px] font-bold'>How to buy</span>
                    <div className='flex flex-col gap-[14px] text-[16px] font-normal mt-[20px]'>
                      <span>Payment methods</span>
                      <span>Order and pick up</span>
                      <span>Order with delivery</span>
                      <span>Shopping over the phone</span>
                      <span>Returns</span>
                    </div>
                    
                   </div>
                   <div className=''>
                    <span className='text-[20px] font-bold'>Help</span>
                    <div className='flex flex-col gap-[14px] text-[16px] font-normal mt-[20px]'>
                      <span>Contact</span>
                      <span>Online Help</span>
                      <span>Our Commitments</span>
                      <span>Give feedback</span>
                      
                    </div>
                    
                   </div>
                   <div className=''>
                    <span className='text-[20px] font-bold'>Services</span>
                    <div className='flex flex-col gap-[14px] text-[16px] font-normal mt-[20px]'>
                      <span>Transport</span>
                      <span>Design service</span>
                      <span>Paint an plaster mixing</span>
                      <span>service</span>
                      <span>Dimensioning and assemly</span>
                      <span>service</span>
                      <span>Return of used equipment</span>
                      <span>Additional services</span>
                    </div>
                    
                   </div>
                   <div className=''>
                    <span className='text-[20px] font-bold'>About</span>
                    <div className='flex flex-col gap-[14px] text-[16px] font-normal mt-[20px]'>
                      <span>About us </span>
                      <span>Press Office</span>
                      <span>For suppliers</span>
                      <span>Regulations</span>
                      <span>Privacy Policy</span>
                      <span>Cookies</span>
                      <span>Personal Date Request</span>
                    </div>
                    
                   </div>

                 </div>
                   
             </div>
              <hr/>
          <div className='flex justify-between pt-[40px] pb-[40px]'>
          <div className='flex justify-center space-x-2 text-[#434447] 
                text-[14px] mt-[40px]'>
                  <div className='w-5 h-5 bg-white border-2 border-black rounded-full  flex
                   justify-center items-center  font-bold mb-0.5'>
                     c
                  </div>
                  <span className='font-normal mb-[16px] '>2021 Divante S.A.</span>
                </div>
               <div className='flex gap-[50px]'>
               <div className='flex justify-center space-x-3 mt-[40px]'>
                <span>{<RiFacebookCircleFill />}</span>
                <span >{<FaSquareInstagram />}</span>
                <span>{<IoLogoYoutube/>}</span>
               </div>
                <div className='flex justify-center mt-[24px] font-bold' >
                <img src="/src/logotype.png" alt="" />
                </div>
               </div>
          </div>
              

            </div>
          </div>
    {/* end */}
      </div>
       
    </div>
   
  );
};

export default HomePage