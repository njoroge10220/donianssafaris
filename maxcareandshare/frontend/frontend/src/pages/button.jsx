
import React from "react";

function Button(props) {
    return(
        <>
        <div>
            <button className="rounded-[3px] bg-[#00BFFF] text-[#FFF] border-1 border-[#00BFFF] font-medium  hover:animate-pulse flex justify-center text-center p-[7px] text-[18px] " style={{ fontFamily: 'Roboto' }} >
                {props.children}
            </button>
        </div>
        </>
    )
}

export default Button

