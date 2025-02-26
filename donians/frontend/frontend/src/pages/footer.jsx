
import React from 'react'

import { FaFacebook,FaYoutube,FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram, FaPhoneVolume } from "react-icons/fa6";
import { PiCopyrightFill } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";


function Footer(){

    const links  = [
        {id:1, name:'About Us', link:'/',},
        {id:2, name:'Terms of Use', link:'/',},
        {id:3, name:'Privacy Policy', link:'/',},
        {id:4, name:'Contact Us', link:'/',},
        {id:5, name:"Blog", link:'/',},
    ]

    const statics = [
        {id:1, num:'10',name:'counties',link:'/',},
        {id:2, num:'14',name:'parks',link:'/',},
        {id:3, num:'20',name:'tour packages',link:'/',},
        {id:4, num:'30',name:'tour operators',link:'/',},
        {id:5, num:'100',name:'user reviews',link:'/',},
    ]
    const safarisbyParks = [
        {id:1,park:"Masaai Mara",link:'/',},
        {id:2,park:"Amboseli",link:'/',},
        {id:3,park:"Nairobi",link:'/',},
        {id:4,park:"Tsavo",link:'/',},
        {id:5,park:"Lake Nakuru",link:'/',},
    ]
    const safarisbyCounties = [
        {id:1,county:'Nakuru',link:'/',},
        {id:2,county:'Narok',link:'/',},
        {id:3,county:'Nairobi',link:'/',},
        {id:4,county:'Taita Taveta',link:'/',},
        {id:5,county:'Kajiado',link:'/',},
        {id:6,county:'Samburu',link:'/',},
    ]
    const safarisbyType = [
        {id:1, type:'Luxury+', link:'/',},
        {id:2, type:'Luxury', link:'/',},
        {id:3, type:'Mid-range', link:'/',},
        {id:4, type:'Budget', link:'/',},
    ]

    const socials = [
        {id:1,icon:<FaFacebook size={30} />,link:'/',},
        {id:2,icon:<FaSquareInstagram size={30} />,link:'/',},
        {id:3,icon:<FaTwitterSquare size={30} />,link:'/',},
        {id:4,icon:<FaYoutube size={30} />,link:'/',},
    ]

    return (
        <footer className='m-1'>
            <div className='bg-[#d1a36e] rounded-sm '>
                <div className='w-[97%] mx-auto py-2 my-3'>
                    <div className=' my-5 w-[80%] mx-auto '>
                        <h3 className='font-semibold text-xl'> About Donians Safaris </h3>
                        <p> Donians is a great tourism company, Offering great tours across the country! </p>
                    </div> 
                    <div className='flex md:flex-row flex-col w-[90%] mx-auto flex-grow gap-7 justify-between mt-4 '>
                        <div className='m-2  '>
                            <h2 className='font-bold text-2xl text-center'>Our Statistics</h2>    
                            <div>
                                <ul className='py-2 space-y-1 flex flex-col  items-center '>
                                    {statics.map((link) =>(
                                        <li key={link.id} className='hover:underline transform hover:translate-x-2'>
                                            <a href={link.link}> {`${link.num}+   ${link.name}`} </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> 
                        <div className='my-2'>
                            <h2 className='font-bold text-2xl text-center'>Safaris by Park</h2>    
                            <div>
                                <ul className='py-2 space-y-1 flex flex-col  items-center'>
                                    {safarisbyParks.map((link) =>(
                                        <li key={link.id} className='hover:underline transform hover:translate-x-2'>
                                            <a href={link.link}> {link.park} </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> 
                        <div className='my-2'>
                            <h2 className='font-bold text-2xl text-center'>Safaris by County</h2>    
                            <div>
                                <ul className='py-2 space-y-1 flex flex-col  items-center'>
                                    {safarisbyCounties.map((link) =>(
                                        <li key={link.id} className='hover:underline transform hover:translate-x-2'>
                                            <a href={link.link}> {link.county} </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> 
                        <div className='my-2'>
                            <h2 className='font-bold text-2xl text-center'>Safaris by Type</h2>    
                            <div>
                                <ul className='py-2 space-y-1 flex flex-col  items-center'>
                                    {safarisbyType.map((link) =>(
                                        <li key={link.id} className='hover:underline transform hover:translate-x-2'>
                                            <a href={link.link}> {link.type} </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> 
                        <div className='m-2'>
                            <h2 className='font-bold text-2xl text-center'>Quick Links</h2>    
                            <div>
                                <ul className='py-2 space-y-1 flex flex-col  items-center'>
                                    {links.map((link) =>(
                                        <li key={link.id} className='hover:underline transform hover:translate-x-2'>
                                            <a href={link.link}> {link.name} </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> 
                    </div>         
                </div>
                <div className=" text-[#fff] flex md:justify-center justify-between p-1 md:w-[90%] w-[100%]  my-1 ">
                    <a href="mailto:services@donianssafaris.com" className="md:px-28 px-1 hover:text-[#333] flex items-center "> <MdAttachEmail /> services@donianssafaris.com </a>
                    <a href="tel:+254 723 697347" className=" hover:text-[#333] flex items-center "> <FaPhoneVolume  /> +254 723 697347 </a>
                </div>
                <hr className='border-1 w-[80%] mx-auto border-[#33333380] rounded ' />
                <div className=' grid md:grid-cols-2 grid-cols-1 w-[80%] mx-auto '>
                    <div className='gap-5 flex my-2'>
                        {socials.map((social) =>(
                            <div key={social.id} className='p-1 border-2 border-[#333] hover:scale-110 rounded-md  '>
                                <a href={social.link} className=' '> {social.icon} </a>
                            </div>
                        ))}
                    </div>
                    <div className='gap-5 flex my-2'>
                        <h4 className='flex items-center gap-2'>Copyright <PiCopyrightFill /> <a href="/"> donianssafaris.</a> All RIghts Reserved. </h4>
                    </div>
                </div>
                <div className='flex justify-center items-center text-sm'>
                    developed & maintained by <a href="https://jinegroup.co.ke">  @ jinegroup.co.ke </a>
                </div>
            </div>        
        </footer>
    )
}

export default Footer