
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MultiNavbar from "./multiNavbar";

function Aiding(){
    const locate = useLocation()
    const hash = locate.hash

    useEffect(() =>{
        if(hash) {
            const element = document.querySelector(hash)
            if(element){
                element.scrollIntoView({ behavior: 'smooth'})
            }
        }
    }, [hash])

    return(
        <>
        <section>
            <div>
                <MultiNavbar />
            </div>
            <div className=" space-y-2 ">
                {/** donate section */}
                <section id="donate">

                </section> 

                {/**volunteer section */}
                <section id="volunteer">

                </section> 

                {/**fundraise section */}
                <section id="fundraise">

                </section> 

                {/**gift section */}
                <section id="gift">

                </section>

                {/**advocate section */}
                <section id="advocate">

                </section> 

                {/**partner section */}
                <section id="partner">

                </section>                
            </div>
        </section>        
        </>
    )
}

export default Aiding