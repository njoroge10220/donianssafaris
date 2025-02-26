
import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa";

function SafariCard({id, image, days, title, ammount, county, visiting, safariTypes, comfort, sharedTour, rating}){

  function AddFavourite(id){

  }

  return (
     <>
         <div className='shadow-lg static mx-auto bg-[#d1bd9280] my-2 md:w-[450px] w-[350px] flex-1 flex flex-col hover:scale-105 rounded-lg h-full group '>
            <div onClick={() => AddFavourite(id)} className=' z-40 absolute mt-[30px] hover:scale-125 md:ml-[400px] ml-[300px]  rounded-full w-[30px] h-[30px] bg-[#f4f4f4] flex  justify-center items-center '>
              <FaHeart size={20} style={{ color: '#e99d56' }} />
            </div> 
        <a href={`mailto:donianssafaris@gmail.com?subject= ${days}-Days ${title}`}>
          <div className=' relative w-full h-[250px] '>
            <img src={image} alt={`${title} image `} className=' w-full h-full rounded-t-lg ' />
          
            <div className='static px-3 flex flex-col justify-between items-center'>
            <div className='bg-[#e99d56] p-1 border-1 border-[#e99d56] absolute mt-[-200px] md:ml-[-320px] ml-[-215px] flex items-center text-[#f4f4f4] gap-1 '>
              <AiFillStar size={20} />
              <h2> Top Rated Operator </h2>
            </div>
              <div className='absolute inset-0 flex items-end px-1 bg-gradient-to-b from-transparent via-black/10 to-black/10 '>
              <h2 className=' font-bold p-2 md:text-[29px] text-[21px] text-[#fff] w-[90%] mx-auto
              text-center group-hover:underline underline-offset-2 group-hover:scale-[115%] '> 
                {`${days}-Day ${title}`} 
              </h2>
              </div>
            </div>
          </div>
          <div className='flex flex-col flex-grow py-2'>
            <div className='flex px-4 pt-2  gap-1'>
              <h2 className=' font-bold text-2xl '> {`$ ${ammount}`}  </h2> <span className=' flex justify-end items-center'>pp (USD)</span>
            </div>
            <div className='py-2 px-4 gap-3 flex flex-col flex-grow '>
              <div className=' py-2 flex items-center'>
                <h2 className=' font-semibold text-md'> {`${county} :  `}  </h2> 
                <span className=' flex items-center font-normal text-sm gap-1'>  
                  <GoDotFill /> {safariTypes} <GoDotFill /> {comfort} <GoDotFill /> {sharedTour} tour  
                </span>
              </div>
              <div className='flex py-2 items-center gap-1 '>
                <h2 className=' font-semibold text-lg'> Visiting:  </h2> <span className='font-normal text-md '> {visiting} </span>
              </div>
            </div>
          </div>
          <div className="flex py-1 px-2 justify-center ">
            {Array.from({length: 5}, (_, index)=>{
              return(                    
                <AiFillStar key={index} color={index + 1 <= rating ?'#a15f3e' : '#aaabab'} className="my-1 text-xl"/>
            )})}    
          </div>
        </a>
      </div>
     </>
  )
}

export default SafariCard