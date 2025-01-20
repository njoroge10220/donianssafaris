
import React from "react";

import { Logo } from "./arrays";

import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

function Footer(){

    const logo = Logo()

    const PageLinks = [
        {id:1,link:'',name:'FAQs'},
        {id:2,link:'',name:'Privacy Policy'},
        {id:3,link:'',name:'Financial Transparency'},
        {id:4,link:'',name:'Term of Use'},
    ]
    const SocialLinks = [
        {id:1,icon:<FaFacebook />,link:''},
        {id:2,icon:<FaYoutube />,link:''},
        {id:3,icon:<FaInstagramSquare />,link:''},
    ]

    return(
        <>
        <section>
            <div className=" md:py-5 py-3 ">
               
                <div className="bg-[#1a1a1a80] w-[98%] mx-auto p-2 rounded-xl flex flex-col ">
                    <div className="p-3 grid md:grid-cols-2 grid-cols-1" >
                        <div className="flex justify-center items-center ">
                            {logo.map((l) =>(
                                <img key={l.id} src={l.logo_Img} alt="" className=" w-[20%] " />
                            ))}
                        </div>
                        <div>
tttthis
                        </div>
                    </div>
                    <hr className=" border-2 border-[#00BFFF50] rounder-xl w-[80%] mx-auto " />
                    <div className="p-2 mx-auto " >
                        <div className="grid md:grid-cols-3 grid-cols-1 space-y-3 mx-auto ">
                            <div className="  flex justify-center items-center font-medium ">
                                <h3>Copyright @ <a href="/">maxcareandshare</a></h3>
                            </div>
                            <div className=" flex justify-center items-center space-x-3 ">
                                {PageLinks.map((link, index) => index != PageLinks.length - 1 ? (
                                    <div className="flex space-x-2 justify-center items-center text-center text-md font-medium ">
                                        <a href={link.link} key={index} className=" hover:text-[#aaabab]  " > {link.name} </a> <p> | </p>
                                    </div>
                                ) : <div className="flex space-x-2 justify-center items-center text-center text-md font-medium ">
                                <a href={link.link} key={index} className=" hover:text-[#aaabab]  " > {link.name} </a> 
                            </div> )}
                            </div>
                            <div className=" space-x-4 md:text-3xl text-3xl flex justify-center items-center mx-auto ">
                                {SocialLinks.map((link) =>(
                                    <a href={link.link} key={link.id} className=" hover:text-[#aaabab] " > {link.icon} </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer
