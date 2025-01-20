
import React from "react";

function VolunteerCard({image, name, description, designation}){
    return(
        <>
            <div>
                <div className="border-2 border-[#1a1a1a80] bg-[#aaabab80] rounded-md flex flex-col justify-center items-center text-center  w-[80%] mx-auto space-y-2 py-2 ">
                    <img src={image} alt={`${name} image`} className=" object-cover  " style={{borderRadius: '50%', width: '150px', height: '150px' }} />
                    <h2 className="font-roboto font-medium"> {`${designation} : ${name}`} </h2>
                </div>
            </div>
        </>
    )
}

export default VolunteerCard
