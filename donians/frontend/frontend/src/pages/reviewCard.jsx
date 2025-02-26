
import React from 'react'

import person from '../assets/images//icons/person.png'

import { AiFillStar } from "react-icons/ai";


 function ReviewCard({name, date, feedback, rate}){
  return (
    <div className='m-4'>
        <div className='flex md:w-[80%] w-[98%] py-2 '>
            <div className='flex justify-center'>
                <img src={person} alt='reviewer icon' className='w-[60%] ' />
            </div>
            <div className='flex flex-col justify-start p-1 '>
                <h2 className='font-semibold text-lg'> {name} </h2>
                <h4 className='font-medium' > {`Reviewed: ${date}`} </h4>
            </div>
        </div>
        <div className='border-1 border-[#333] rounded-md p-3 space-y-2 '>
            <div>
                <div className="flex py-1 px-2 ">
                    {Array.from({length: 5}, (_, index)=>{
                        return(                    
                        <AiFillStar key={index} color={index + 1 <= rate ?'#a15f3e' : '#aaabab'} className="my-1 text-xl   "/>
                    )})}    
                </div>
            </div>
            <div className='px-3 py-4'>
                {feedback}
            </div>
        </div>
    </div>
  )
}

export default ReviewCard