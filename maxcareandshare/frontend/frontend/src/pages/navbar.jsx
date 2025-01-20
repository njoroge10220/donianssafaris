
import React, { useState } from "react";

import Button from "./button";
import { Logo, NavbarLinks } from "./arrays";

import { IoMdHeart } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";


function Navbar() {

    const logo = Logo()
    const navLinks = NavbarLinks()

    const [isMobile, setIsMobile] = useState(false)
    const [isHover, setIsHover] = useState(null)


    return(
        <>
        <div>
            <nav className=" bg-nav-bg bg-cover bg-center bg-[#FFFFFF80] md:mb-12 mb-8 shadow-2xl " >
                <div className="  flex justify-center items-center py-2">
                    <div className="bg-nav-bg bg-cover bg-center w-[95%] mx-auto rounded-md py-2 " style={{filter: 'contrast(1.3) brightness(1.1)'}}>
                        <div className="flex justify-between items-center w-[98%] mx-auto mt-[-15px]">
                            <div className="flex md:w-[30%] w-[20%]">
                                <a href="/" className="flex md:gap-2 gap-1 "> 
                                    {logo.map((l) =>(
                                    <img key={l.id} src={l.logo_Img} alt="org logo" className="md:w-[45%] w-[25%] mt-[-5px] " />                   

                                    ))}
                                    <div className="text-[#00BFFF] -space-y-2 flex flex-col justify-center items-center ">
                                        <p><strong className="md:text-3xl text-lg font-['Liberation Mono'] ">maxcareandshare</strong></p>
                                        <p className="md:text-lg text-xs"><i><center>"A Hand for a smile" </center></i></p>
                                    </div>
                                </a>
                            </div>
                            <div className={` md:static absolute flex justify-between items-center md:w-[60%] mx-auto   
                                ${isMobile ? 'top-[60px] bg-[#00000080]  flex-col py-2 gap-2 right-2 ' : 'top-[-500px] md:flex-row flex-col'}`}>
                                <div className="  md:gap-1 gap-1 px-1 md:w-[80%] mx-auto"> 
                                    <ul className="flex md:flex-row flex-col md:gap-3 px-1 text-xl md:w-[80%] mx-auto">
                                        {navLinks.slice(0,3).map((link) =>(
                                            <li key={link.id} className="tracking-tight text-[#FFF]  hover:text-[#00BFFF] font-black mx-auto "
                                            style={{wordSpacing: '-2px'}}
                                            onMouseEnter={() => setIsHover(link.id)} 
                                            onMouseLeave={() => setIsHover(null)}>
                                                <a href={link.link} className="flex justify-center items-center" style={{ fontFamily: 'Consolas' }}> 
                                                    {link.text} {isHover === link.id ? <TiArrowSortedDown /> : < MdPlayArrow /> } </a>
                                            </li>       
                                        ))}
                                    </ul> 
                                </div>
                                <div className="flex md:flex-row flex-col justify-center place-items-center md:gap-3 gap-1 px-2 md:w-[30%] mx-auto ">
                                    <Button>Fundraise</Button>
                                    <Button>
                                        <div className="flex gap-2 justify-center items-center"> <IoMdHeart className=" animate-pulse justify-center" /> Donate </div> 
                                    </Button>                                
                                </div>                                       
                            </div>
                            <div className="md:hidden text-xl flex justify-center place-items-center w-[20%]  " onClick={() => setIsMobile(!isMobile)}>
                                {isMobile ? <ImCross /> : <IoMenu className="text-2xl"/>}
                            </div>                             
                        </div>                         
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mx-auto ">
                            <div className="text-[#aaabab] md:text-8xl text-4xl font-black text-center italic leading-none" >
                                <h1>"A hand for A smile" </h1>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h2 className="text-white md:text-xl font-['Georgia'] font-bold text-center leading-tight">You're the hope <br /> of others</h2>
                                <Button><div className="font-['Consolas'] font-bold ">Make a Donation</div></Button>
                            </div>
                        </div>
                        <div className="w-[80%] mx-auto my-2 ">
                            <ul className="flex md:flex-row flex-col justify-between items-center md:gap-4 gap-0 px-1 md:text-xl text-lg ">
                                {navLinks.slice(3,6).map((link) =>(
                                    <li key={link.id} className="font-bold tracking-tight font-['Liberation Mono'] text-[#FFF] hover:bg-[#00BFFF50] rounded-sm md:p-2 p-0.5">
                                        <a href={link.link}> {link.text} </a>
                                    </li>       
                                ))}
                            </ul>
                        </div>                                                                           
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar