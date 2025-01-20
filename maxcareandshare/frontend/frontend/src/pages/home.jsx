
import React from "react";

import Navbar from "./navbar";
import EventCard from "./eventCard";
import Footer from "./footer";
import VolunteerCard from "./volunteerCard";

import i from "../assets/child-102577_1280.jpg"

import { Images } from "./arrays";
import Button from "./button";
import { FaHandshakeSimple } from "react-icons/fa6";

function Home() {
    const images = Images()

    const waystohelp =  [
        {id:1, way:'Donate', description:'', link:'/aiding#donate'},
        {id:2, way:'Volunteer', description:'', link:'/aiding#volunteer'},
        {id:3, way:'Fundraise', description:'', link:'/aiding#fundraise'},
        {id:4, way:'Gift', description:'', link:'/aiding#gift'},
        {id:5, way:'Advocate', description:'', link:'/aiding#advocate'},
        {id:6, way:'Partner', description:'', link:'/aiding#partner'},


    ]
    return(
        <>
        <div><Navbar /></div>{/** navbar for home page */}
        {/** main home section */}
        <section>
            {/** make donation section */}
            <section>
                <div className="grid md:grid-cols-2 grid-cols-1 w-[90%] mx-auto gap-2 py-2 ">
                   {images.map((img) => 
                    img.id === 1 ? (<img key={img.id} src={img.image} alt="image of the kids" className="md:rounded-tl-[100px] rounded-tl-[80px] md:rounded-br-[100px] rounded-br-[80px] md:w-[70%] w-[90%] mx-auto " /> ) : null
                   )}
                   <div className=" flex flex-col justify-center items-center md:p-0 py-5 ">
                        <div className="text-center">
                            <h2 className=" font-bold md:text-3xl text-2xl font-['Consolas'] tracking-tighter text-center ">You too can keep their hope going</h2>
                            <p className="md:text-xl text-lg font-semibold"><a href="/"><i>maxcareandshare organisation</i></a> has reached out to over 2000 kids across Kenya.</p>
                            <h3 className="md:text-xl text-lg font-bold py-2 " style={{ fontFamily: 'Roboto' }} >Let's Keep the fire burning together!</h3>

                        </div>
                        <div><Button>make a donation</Button></div>
                   </div>
                </div>
            </section>
            {/** events section */}
            <section>
                <div className="md:my-[50px]  ">
                    <div className="flex justify-center items-center md:py-10 py-4 ">
                        <h2 className="font-['Consolas'] font-bold my-2 text-3xl tracking-tight">Upcoming Events</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 px-2">
                        <EventCard
                        date={'27-Aug-2024'}
                        title={'Fundraising Event'}
                        place={"Mombasa"}
                        image={i}
                        link={'join-event'}
                        time={'5.30pm'}
                        />                    
                    </div>
                </div>
            </section>
            {/** partner with us section */}
            <section>
                <div className="md:my-[100px] my-[60px]  grid md:grid-cols-2 grid-cols-1 w-[90%] mx-auto ">
                    <div className="flex flex-col justify-center items-center py-2 w-[70%] mx-auto ">
                        <div className=" flex flex-col justify-center items-start">
                            <h2 className="font-medium font-roboto md:text-3xl text-xl text-start ">Donate Food.</h2>
                            <h2 className="font-medium font-roboto md:text-3xl text-xl text-start ">Feed a Child.</h2>
                            <p className="py-5 md:text-xl text-lg ">
                                <a href="/"><i>maxcareandshare organisation </i></a>
                                has gathered over 500 kilograms of dry food and delivered it to needed kids across Kenya.
                            </p>
                        </div>
                        <div className=" flex justify-center items-center ">
                            <Button>Join the Community</Button>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="bg-[#FFF] rounded-xl shadow-xl shadow-[#1a1a1a50] flex flex-col justify-center items-center gap-2 py-5 md:w-[60%] w-[90%] mx-auto ">
                            <FaHandshakeSimple size={45}/>
                            <h2 className="py-2 font-semibold text-xl font-roboto ">Partner with Us Today</h2>
                            <p className="text-center w-[80%] py-2 "> 
                                Your donations today brings a better tomorrow 
                                for the children. Thank you for partnering with  
                                <a href="/"><i> maxcareandshare organisation.</i></a> 
                            </p>
                            <div><Button>Learn More</Button></div>
                        </div>
                    </div>
                </div>
            </section>
            {/** activities section */}
            <section>

            </section>
            {/** ways to help */}
            <section>
                <div>
                    <div className="flex justify-center items-center md:py-5 py-4 ">
                        <h2 className="font-['Consolas'] font-bold my-2 text-3xl tracking-tight">Ways To Help</h2>
                    </div>
                    <div className="my-5 w-[90%] mx-auto ">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                        {waystohelp.map((way) =>(
                            <div className="flex flex-col justify-center items-center py-5  w-[90%] mx-auto ">
                                <h2 className="py-1 font-semibold text-xl font-roboto ">{way.way} </h2>
                                <p className="text-center w-[80%] py-2 "> 
                                    Your donations today brings a better tomorrow 
                                    for the children. Thank you for partnering with  
                                    <a href="/"><i> maxcareandshare organisation.</i></a> 
                                </p>
                                <div><a href={way.link}><Button>{way.way}</Button></a></div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
            {/** how we meet their needs */}
            <section>
                <div className="md:my-[100px] my-[60px]  grid md:grid-cols-2 grid-cols-1 w-[80%] mx-auto">
                    <div className="grid grid-cols-2 md:-space-x-20 -space-x-9">
                        <div className="">
                            {images.map((img) => 
                                img.id === 5 ? (<img key={img.id} src={img.image} alt="image of the needs" className="md:rounded-tl-[100px] rounded-tl-[70px]  h-[95%] md:rounded-br-[100px] rounded-br-[70px] w-[70%] mx-auto  object-cover " /> ) : null
                            )} 
                        </div>
                        <div className="space-y-2">
                            {images.map((img) => 
                                img.id === 3 ? (<img key={img.id} src={img.image} alt="image of the needs" className="md:rounded-tl-[70px] rounded-tl-[40px] md:rounded-br-[70px] h-[45%] rounded-br-[40px] md:w-[60%] w-[70%] mx-auto object-cover " /> ) : null
                            )} 
                            {images.map((img) => 
                                img.id === 7 ? (<img key={img.id} src={img.image} alt="image of the needs" className="md:rounded-tl-[70px] rounded-tl-[40px] md:rounded-br-[70px] h-[45%] rounded-br-[40px] md:w-[60%] w-[70%] mx-auto object-cover " /> ) : null
                            )} 
                        </div>
                    </div>  
                    <div className="flex justify-center items-center">
                        <h2 className="font-light font-roboto md:text-2xl text-xl text-center ">How meet their needs</h2>
                        <p className="  "></p>
                    </div>
                </div>
            </section>
            {/** make a donation section */}
            <section>
                <div className="md:my-[100px] my-[60px]  grid md:grid-cols-2 grid-cols-1 w-[90%] gap-3 mx-auto ">
                    <div className="border-2 border-[#1a1a1a] rounded-xl shadow-xl shadow-[#1a1a1a50] text-center gap-2 py-5  w-[90%] mx-auto my-2 ">
                        <h2 className="py-2 font-semibold text-2xl font-roboto ">Recent Donations</h2>
                        <div className=" w-[90%] mx-auto ">
                            <div className="flex flex-col justify-center items-center">

                            </div>
                        </div>
                    </div>
                    <div>
                    <div className=" flex flex-col justify-center items-start md:w-[70%] w-[90%] mx-auto my-2 ">
                            <h2 className="font-medium font-roboto md:text-5xl text-3xl text-center ">Ready to Get Involved?</h2>
                            <p className="py-5 md:text-xl text-lg ">
                                <a href="/"><i>maxcareandshare organisation </i></a>
                                has gathered over 500 kilograms of dry food and delivered it to needed kids across Kenya.
                            </p>
                        </div>
                        <div className=" flex justify-center items-center ">
                            <Button>Make a donation</Button>
                        </div> 
                    </div>
                </div>
            </section>
            {/** volunteers the team */}
            <section>
                <div>
                    <div>   
                        <div className="flex  flex-col justify-center items-center md:py-5 py-4 ">
                            <h2 className="font-['Consolas'] font-bold my-2 text-3xl tracking-tight">Meet the Team</h2>
                            <ul className="flex flex-wrap w-[90%] mx-auto justify-center items-center space-x-1 space-y-2 ">
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </section>          
            {/** lastest news */}
            <section>

            </section>
            {/** footer */}
            <div>
                <Footer />
            </div>

        </section>
        </>
    )
}

export default Home
