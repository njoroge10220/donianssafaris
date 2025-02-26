

import React, { useState, useEffect, useRef } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

import { ImCross } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";

import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";


import { Logo, SafariPlace } from "./getArrays";


function Navbar(){

    const logo = Logo()
    const places = SafariPlace()

    const [ isMobile, setIsMobile] = useState(false)
    const [ isMobile2, setIsMobile2] = useState(false)
    const [numOfFav, setNumOfFav] = useState(0)

    const [isHover, setIsHover] = useState(null)

    const safarisRef = useRef(null)
    const safarisDropdownRef = useRef(null)

    function onSafarisMouseEnter(id){
        setIsHover(id)
    }

    function onSafarisMouseLeave(){
        if(safarisDropdownRef.current && !safarisDropdownRef.current.matches(':hover')
        && safarisRef.current && !safarisRef.current.matches(':hover')){
            setIsHover(null)
        }
    }


    const navArrays =[
        {id:1,text:'Safaris & Tours',link:'/'},
        {id:2,text:'Counties & Parks',link:'/'},
        {id:3,text:'Get a Quote',link:'/'},
    ]

    useEffect(() =>{
        AOS.init({ duration: 1000}) 
    }, [])

    return(
        <>
        <nav className="bg-[#a15f3e] " >
            <div>
                <div className="bg-[#e99d56] text-[#fff]  " >
                    <div className=" text-[#fff] flex justify-between p-1 md:w-[90%] w-[100%] ">
                        <a href="mailto:services@donianssafaris.com" className="md:px-28 hover:text-[#333] flex gap-1 items-center ">  <MdAttachEmail /> services@donianssafaris.com </a>
                        <a href="tel:+254 723 697347" className=" hover:text-[#333] flex items-center "> <FaPhoneVolume  /> +254 723 697347</a>
                    </div>
                </div>            
                <div className="md:w-[95%] w-[99%] mx-auto flex flex-row justify-between items-center md:p-2 py-2 gap-2  ">
                <div className="md:hidden w-[30%] font-medium p-2  ">
                    <div className="z-50" onClick={() => {setIsMobile(!isMobile), setIsMobile2(false)}}>
                        {isMobile ? (
                            <div className="flex gap-1 items-center "> <ImCross /> CLOSE </div> ) : <div className="flex gap-1 items-center"> <FiMenu /> MENU </div> }
                    </div>
                </div>
                <div className=" md:w-[20%] w-[50%] static ">
                    {/** logo */}
                    <a href="/" className=" w-[80%] mx-auto static ">
                        <div className=" absolute md:w-[10%] w-[30%] mx-auto md:mt-[-20px] mt-[-30px] ">
                            {logo.map((l) => l.id === 1 && (
                            <img key={l.id} src={l.logo_Img} alt="company logo" className=" " />
                            ))}
                        </div>
                    </a>
                </div>
                <div className={` md:static absolute px-2
                    ${isMobile ? 'w-[90%] top-[100px] bg-[#333] z-40 ' : 'top-[-500px] '}`} >
                    <div className={`gap-7 flex md:flex-row flex-col justify-between items-center
                        ${isMobile ? 'flex-col top-[100px] p-2 ' : ''}`} >
                        {navArrays.map((navArray) => (
                            <div key={navArray.id} className=""
                            onMouseEnter={() => onSafarisMouseEnter(navArray.id)}
                            onMouseLeave={() => onSafarisMouseLeave()}
                            ref={safarisRef}>
                                <a href={navArray.link} className=" hover:underline text-[#fff] font-semibold text-xl "> {navArray.text} </a>
                            </div>                            
                        ))}
                    </div>
                    {isHover === 1 && (
                        <div ref={safarisDropdownRef} onMouseLeave={() => onSafarisMouseLeave()} className="absolute mt-[2px] z-50 border-1 bg-[#fde38d] text-[#3c72fc] font-medium p-2 grid grid-cols-3 ">
                            {places.map((place) => (
                                <a href="" key={place.id} className="p-1 flex items-center  bg-[#fff] m-1 rounded-md ">
                                    <IoIosArrowForward /> {place.name}
                                </a>
                            ))}
                        </div>
                    )}
                    {isHover === 2 && (
                        <div  ref={safarisDropdownRef} onMouseLeave={() => onSafarisMouseLeave()} className="absolute mt-[2px] z-50 border-1 bg-[#fde38d] text-[#3c72fc] font-medium p-2 grid grid-cols-3 ">
                            {places.map((place) => (
                                <a href="" key={place.id} className="p-1 flex items-center  bg-[#fff] m-1 rounded-md ">
                                    <IoIosArrowForward /> {place.county}
                                </a>
                            ))}

                        </div>
                    )}
                </div>
                <div className="mx-4 px-2">
                    <a href="/"  className="flex justify-center items-center gap-4 font-semibold">
                        {/** favourite list */}
                        <div className="w-[40px] h-[40px] rounded-full bg-[#fff] my-2 flex justify-center items-center ">
                            <FaHeart color="#e99d56" size={25} />
                            <div className="static">
                                <div className="absolute mt-[-25px] bg-black w-[20px] h-[20px] rounded-full text-[#fff] flex justify-center items-center ">
                                    <h2> {numOfFav} </h2>
                                </div>
                            </div>
                        </div>
                        <div className="hover:underline text-[#fff] md:block hidden ">
                            <h2>List</h2>
                        </div>
                    </a>
                </div>
                <div className={` py-2 w-[25%] px-2 md:static absolute
                    ${isMobile2 ? 'top-[130px] w-[95%]  ' : 'top-[-500px] ' } `} >
                    <form action="" className="flex  items-center">
                        <input type="text" name="" id="" placeholder="Search" className="bg-[#d1a36e] p-2 font-medium w-[95%] " />
                        <div className="static flex  items-center p-1">
                        <button  onClick={() =>console.log("Test button clicked!")} className=" absolute ml-[-40px]  " ><VscSearch color="#fff" size={25} /></button>
                        </div>
                    </form>
                </div>
                <div className=" md:hidden font-medium mx-2">
                    <div className=" p-2 " onClick={() => {setIsMobile2(!isMobile2), setIsMobile(false)}}>
                        {isMobile2 ? <div className="flex gap-1  items-center  "><ImCross /> CLOSE</div>  : <div className=" flex gap-2"><VscSearch color="#fff" size={25} /></div>}
                    </div> 
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
