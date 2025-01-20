
import React from "react";

import Button from "./button";

function EventCard({date, image, title, place, link, time}) {
    return(
        <>
        <div>
            <div className="rounded-lg border-1 border-[#1a1a1a] bg-[#aaabab] md:max-w-xl max-w-xs  mx-auto shadow-lg ">               
                <div className="relative " >
                    <img src={image} alt={`${title} image`} className=" rounded-lg " />
                    <div className="absolute bg-[#FFFFFF80] px-2 text-center top-8 left-5 rounded-md ">
                        {date.split('-').map((d) =>(
                           <div className="font-bold leading-5">
                             {d}
                           </div>
                        ))}
                    </div>
                    <div className="absolute text-[#FFF]   text-center md:top-[300px] top-36 md:left-6 left-4 rounded-md">
                        <h2 className="font-black md:text-3xl text-xl " style={{fontFamily: 'Roboto Condensed'}}>{title}</h2>                        
                        <div className="md:gap-7 gap-5 my-1 leading-tight flex">                       
                            <h3 className="font-bold" style={{fontFamily: 'Lato'}}>{place}</h3>
                            <h3 className="font-bold" style={{fontFamily: 'Lato'}}>{time} </h3>                        
                        </div>                          
                    </div>
                    <div className="absolute right-3 md:top-80 top-36 ">
                        <div className=" flex justify-end items-end px-5 " >
                            <a href={link}> <Button >join</Button> </a>
                        </div>  
                    </div>     
                </div>
                
            </div>
        </div>        
        </>
    )
}

export default EventCard