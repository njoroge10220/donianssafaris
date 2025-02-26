
import React, { useState, useEffect, useRef } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlinePersonPin } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { IoBookmarksSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbXboxXFilled } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";
import { FaStar } from "react-icons/fa"


import { SafariPlace, QAs, GottenFeedback } from "./getArrays";
import { Feedback } from "./postArrays";

import Navbar from "./navbar";
import SafariCard from "./safariCard";
import ReviewCard from "./reviewCard";
import Footer from "./footer";


function Home(){

    const quesAns = QAs()
    const places = SafariPlace()
    const feedbacks = GottenFeedback()

    const [tourLength, setTourLength] = useState(10)
    const [tourAmmount,setTourAmmount] = useState(3000)

    const [searched, setSearched] = useState('')
    const [searchHover, setSearchHover] = useState(false)

    const [giveFeedback, setGiveFeedback] = useState(false)

    const searchInputRef = useRef(null)
    const dropdownRef = useRef(null)

    function onSearchMouseEnter(){
        setSearchHover(true)
    }

    function onSearchMouseLeave(){
        if(dropdownRef.current && !dropdownRef.current.matches(':hover')
        && searchInputRef.current && !searchInputRef.current.matches(':hover')){
            setSearchHover(false)
        }
    }
    
    const filteredSearchTerm = places.filter((place) => 
        place.county.toLowerCase().includes(searched.toLowerCase()) || 
        place.name.toLowerCase().includes(searched.toLowerCase())
    );
    

    const [levelChecked, setLevelChecked] = useState('')
    const [privateofShareCheck, setPrivateofShareCheck] = useState('')
    const [safariTypeCheck, setSafariTypeCheck] = useState('')
    const [operatorRatingCheck, setOperatorRatingCheck] = useState(5)
    const [specializedToursCheck, setSpecializedToursCheck] = useState(null)

   const [showCal, setShowCal] = useState(false)
   const [selectDate, setSelectDate] = useState(null)

   const [people, setPeople] = useState(1)

   function resetFilters(){
    setTourLength(10)
    setTourAmmount(30000)
    setLevelChecked('')
    setPrivateofShareCheck('')
    setSafariTypeCheck('')
    setOperatorRatingCheck(5)
    setSpecializedToursCheck(null)
   }
    
    const [currPage, setCurrPage] = useState(1)

    const [feedName, setFeedName] = useState('')
    const [feedEmail, setFeedEmail] = useState('')
    const [feedText, setFeedText] = useState('')
    const [feedRating, setFeedRating] = useState(0)

    const handleSubmit = async () => {
        if (feedEmail !== '' && feedName !== '' && feedText !== ''){
            await Feedback({
                name: feedName,
                email: feedEmail,
                feedback: feedText,
                rating: feedRating,
            })
    
            //reseting values
            setFeedName('')
            setFeedEmail('')
            setFeedText('')
            setFeedRating(0)
        }
        else{
            alert(`fill in all spaces for the feedback`)
        }
    }
        
    const placesToShow = places.filter((place) => place.days <= tourLength && 
                                                place.price <= tourAmmount && 
                                                place.rating <= operatorRatingCheck && 
                                                (!safariTypeCheck || place.safari_type === safariTypeCheck) &&
                                                (!levelChecked || place.comfort_level === levelChecked) && 
                                                (!privateofShareCheck || place.private_share_tour === privateofShareCheck))


    const cardsPerPage = 6

    const totalPages = Math.ceil(placesToShow.length / cardsPerPage)

    const indexOfLastCard = currPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage

    const currCards = placesToShow.slice(indexOfFirstCard, indexOfLastCard)

    const maxTextLength = 100
    const comfortLevels = [
        {id:1,text:'Luxury+',},
        {id:2,text:'Luxury',},
        {id:3,text:'Mid-range',},
        {id:4,text:'Budget',},
    ]

    const privateofShare = [
        {id:1,text:'Private',},
        {id:2,text:'Shared',},
    ]

    const safariType = [
        {id:1,text:'Lodge,tented camp',},
        {id:2,text:'hotel',},
        {id:3,text:'Camping',},
    ]

    const operatorRating = [ 1,2,3,4,5 ]

    const specializedTours = [
        {id:1, text:'Fly-in safaris',},
        {id:2, text:'Family',},
        {id:3, text:'Beach time',},
        {id:4, text:'Honeymoon',},
        {id:5, text:'self-drive',},
        {id:6, text:' Guided self-drive',},
    ]

    const relatedSearches = [
        {id:1,name:'Safari Tour Operators', link:'/',},
        {id:2,name:'Honeymoon Safaris', link:'/',},
        {id:3,name:'African Overland Tours', link:'/',},
        {id:4,name:'Private Safaris', link:'/',},
        {id:5,name:'African Luxury Safarias', link:'/',},
        {id:6,name:'Family Safaris', link:'/',},
    ]

    function handleFeed(e){
        if(e.target.value.length <= maxTextLength){
            setFeedText(e.target.value)
        } 
    }
    
    useEffect(() =>{
        AOS.init({ duration: 1000}) 
    }, [])

    return(
        <>
        <section className="">
            <nav> <Navbar /> </nav>
            {/** main section */}
            <div className=" md:my-[90px] my-[50px] flex flex-col ">
                <div className="flex flex-row w-[98%] mx-auto  ">
                    <div className="w-[55%]  md:block hidden mx-auto ">
                        <div className="py-3 px-2 border-1 border-[#e99d56] bg-[#f4f4f4] leading-0.5 w-[100%] ">
                            <label htmlFor="safari" className="font-semibold text-2xl">
                                Your Safari
                            </label>
                            <div className="w-[100%] space-y-4 ">
                                <div className="flex flex-col static"> 
                                    <div className="flex  justify-between items-center px-1"
                                    onMouseEnter={() => onSearchMouseEnter()}
                                    onMouseLeave={() => onSearchMouseLeave()}
                                    ref={searchInputRef}>
                                        <FaMapMarkerAlt size={30} color="#a15f3e" className="mr-2" /> 
                                        <input type="text" name="" id="" value={searched} onChange={(e) => setSearched(e.target.value)} placeholder="Where To"
                                        className=" hover:scale-105 hover:border-[#a15f3e] font-medium border-1 border-[#1a1a1a] px-2 py-4 w-[90%] " /> 
                                        <div className="static flex items-center">
                                            <button onClick={() => setSearched(e.target.value)} type="submit" className="absolute ml-[-25px] "><FaSearch /></button>
                                        </div>
                                    </div>
                                    <div className="text-sm text-center text-[#a15f3e] font-medium " >
                                        <p> + Add county or park </p>
                                    </div>
                                   {searchHover && (
                                    <div className="absolute mt-[50px] px-7 py-2 h-[300px] overflow-y-scroll bg-[#333] text-[#fff]  flex flex-col gap-4 scape-y-4 z-40 " ref={dropdownRef} onMouseLeave={() => onSearchMouseLeave()} >
                                        {filteredSearchTerm.map((place) => (
                                           <div key={place.id} className="flex flex-col space-y-2">
                                             <a href=""  className="p-3 border-1 border-[#fff] rounded-sm text-center "> {place.county} </a>
                                             <a href="" className="p-3 border-1 border-[#fff] rounded-sm text-center "> {place.name} </a>
                                           </div>
                                        ))}
                                    </div>
                                   )}
                                </div>
                                <div className="flex static justify-between items-center px-1"> 
                                    <FaCalendarDays size={30} color="#a15f3e" className="mr-2" />
                                    <input type="text" name="" id="" 
                                        onClick={() => setShowCal(!showCal)}
                                        value={selectDate ? new Date(selectDate.getTime() - selectDate.getTimezoneOffset() * 60000).toISOString().split("T")[0] : 'pick a date'}  
                                        className=" font-medium border-1 border-[#1a1a1a] px-2 py-4 w-[90%] hover:scale-105 hover:border-[#a15f3e] " />
                                    <div className="static flex items-center">
                                        <button onClick={() => {setSelectDate(null), setShowCal(!showCal)}} className="absolute ml-[-25px]"> {selectDate ? <TbXboxXFilled /> : <IoIosArrowForward />} </button>
                                    </div> 
                                    <div className=" static">
                                    {showCal && (
                                        <div className="absolute mt-[-15px] z-20 "> 
                                            <DatePicker
                                                value={selectDate}
                                                onChange={(date) => setSelectDate(date)}
                                                minDate={new Date()}
                                                className=" absolute mt-[-10px] ml-[10px] " inline/>
                                        </div>
                                    )}
                                    </div>
                                </div>
                                <div className="flex  justify-between items-center px-1"> 
                                    <MdOutlinePersonPin size={30} color="#a15f3e" className="mr-2" />
                                    <input type="text" name="" id="" placeholder="Travelers" 
                                    className=" font-medium border-1 border-[#1a1a1a] px-2 py-4 w-[90%] hover:scale-105 hover:border-[#a15f3e] " />
                                    <div className="static flex items-center">
                                        <button onClick={() => console.log('c')} className="absolute ml-[-25px] "><IoIosArrowForward /></button>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <label htmlFor="tourLength" className="font-semibold text-xl p-2">
                                Tour Length
                            </label>
                            <div>
                                {/** touch length slider */}
                                <input
                                type="range"
                                min='1'
                                max='10'
                                step='1'
                                value={tourLength}
                                onChange={(e) => setTourLength(e.target.value)}
                                className=" w-[90%] h-2 my-3 bg-[#333] accent-[#a15f3e] "
                                />
                                {/** value display */}
                                <div className="flex justify-between">
                                    <span>1</span>
                                    <span>{tourLength} days </span>
                                    <span>10 days</span>
                                </div>
                            </div>
                            <hr className="border-1 border-[#fde38d] w-[90%] my-2 " />
                        </div>
                        <div className="my-4">
                            <label htmlFor="tourLength" className="font-semibold text-xl p-2">
                                Rates in USD
                            </label>
                            <p className="leading-0.5 px-2 pb-2"> per person</p>
                            <div>
                                {/** touch length slider */}
                                <input
                                type="range"
                                min='500'
                                max='3000'
                                step='250'
                                value={tourAmmount}
                                onChange={(e) => setTourAmmount(e.target.value)}
                                className=" w-[90%] h-2 my-3 bg-[#333] accent-[#a15f3e] "
                                />
                                {/** value display */}
                                <div className="flex justify-between">
                                    <span>$ 500</span>
                                    <span> $ {tourAmmount} </span>
                                    <span>$3000</span>
                                </div>
                            </div>
                            <hr className="border-1 border-[#fde38d] w-[90%] my-2 " />
                        </div>
                        <div className="my-4">
                            <h2 className="p-2 font-semibold text-xl">Comfort Level</h2>
                            <div className="flex flex-col px-4">
                                {comfortLevels.map((level) =>(
                                    <label htmlFor="comfort level" key={level.id} className="flex items-center gap-2 font-normal text-md py-1">
                                        <input type="checkbox" onChange={() => setLevelChecked(level.text)} style={{ transform: 'scale(1.25)' }} />
                                        <span> {level.text} </span>
                                    </label>
                                ))}
                            </div>
                            <hr className="border-1 border-[#fde38d] w-[90%] my-2 " />
                        </div>
                        <div className="my-2">
                            <h2 className="p-2 font-semibold text-xl">Private or Shared Tour</h2>
                            <div className="flex flex-col px-4">
                                {privateofShare.map((level) =>(
                                    <label htmlFor="comfort level" key={level.id} className="flex items-center gap-2 font-normal text-md py-1">
                                        <input type="checkbox" onChange={() => setPrivateofShareCheck(level.text)} style={{ transform: 'scale(1.25)' }} />
                                        <span> {level.text} tour </span>
                                    </label>
                                ))}
                            </div>
                            <hr className="border-1 border-[#fde38d] w-[90%] my-2 " />
                        </div>
                        <div className="my-4">
                            <h2 className="p-2 font-semibold text-xl">Safari Type</h2>
                            <div className="flex flex-col px-4">
                                {safariType.map((level) =>(
                                    <label htmlFor="comfort level" key={level.id} className="flex items-center gap-2 font-normal text-md py-1">
                                        <input type="checkbox" value={safariTypeCheck} onChange={() => setSafariTypeCheck(level.text)} style={{ transform: 'scale(1.25)' }} />
                                        <span> {level.text} </span>
                                    </label>
                                ))}
                            </div>
                            <hr className="border-1 border-[#fde38d] w-[90%] my-2 " />
                        </div> 
                        <div className="my-4">
                            <h2 className="p-2 font-semibold text-xl">Operator Rating</h2>
                            <div className="flex flex-col px-4">
                            {operatorRating.reverse().map((rate) => (
                                <label htmlFor="comfort level" key={rate.id} className="flex items-center gap-2 font-normal text-md py-1">
                                    <input type="checkbox" value={operatorRatingCheck} onChange={() => {setOperatorRatingCheck(rate), console.log(rate)}}   style={{ transform: 'scale(1.25)' }} />
                                    <span className="flex">  
                                        {Array.from({length: 5}, (_, index)=>{
                                            return(                    
                                                <AiFillStar key={index} color={index + 1 <= rate ?'#e99d56' : '#33333380'} className="my-1 text-xl"/>
                                        )})} 
                                    </span>
                                </label>
                            ))}   
                            </div>
                            <hr className="border-1 border-[#fde38d] w-[90%] my-2 " />
                        </div>
                        <div className="my-4">
                            <h2 className="p-2 font-semibold text-xl">Specialized Tours</h2>
                            <div className="flex flex-col px-4">
                                {specializedTours.map((level) =>(
                                    <label htmlFor="comfort level" key={level.id} className="flex items-center gap-2 font-normal text-md py-1">
                                        <input type="checkbox" onChange={() => setSpecializedToursCheck(level.id)} style={{ transform: 'scale(1.25)' }} />
                                        <span> {level.text} </span>
                                    </label>
                                ))}
                            </div>
                            <hr className="border-1 border-[#fde38d] w-[90%] my-2 " />
                        </div> 
                    </div>
                    <div className="mx-auto space-y-5">
                        <div>
                            <h1 className="md:text-5xl text-4xl font-bold mb-3 px-7" data-aos='fade-right'>
                                Donian Safari Tours
                            </h1>
                            {/** filters */}
                            <button className={`p-2 md:flex hidden border-1 rounded-sm border-[#333]  mx-10`}  onClick={() => resetFilters()} >
                                clear all filters
                            </button>
                        </div>
                        <div className=" w-[99%] mx-auto flex gap-2 ">
                            <div className=" flex flex-wrap justify-center items-stretch " >
                                {currCards.map((place) => (
                                    <div key={place.id} className="flex-grow  my-2" data-aos='fade-up'>
                                        <SafariCard 
                                        id={place.id}
                                        image={place.image}
                                        title={place.name}
                                        days={place.days}
                                        ammount={place.price}
                                        county={place.county}
                                        visiting={place.areas_to_visit}
                                        safariTypes={place.safari_type}
                                        comfort={place.comfort_level}
                                        sharedTour={place.private_share_tour}
                                        rating={place.rating}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="  w-[95%] mx-auto ">
                            {/** paging */}
                            <div className="flex my-4 space-x-4 md:w-[30%] w-[80%] mx-auto  ">
                                <button 
                                onClick={() => setCurrPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currPage === 1}
                                className=" p-4 bg-[#e99d56] text-[#fff] rounded-md disabled:opacity-40 ">
                                   <IoIosArrowBack size={30} />
                                </button>
                                <div className="flex  my-auto font-bold">
                                    {`Page ${currPage} of ${totalPages}`}
                                </div>
                                <button
                                onClick={() => setCurrPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currPage === totalPages}
                                className=" p-4 bg-[#e99d56] text-[#fff] rounded-md disabled:opacity-40 ">
                                    <IoIosArrowForward size={30} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-[#aaabab50] p-2 my-[30px] ">
                        <h2 className="md:p-7 p-5 font-bold text-2xl ">Related Searches</h2>
                        <div className="static">
                            <div className="absolute md:mt-[-120px] mt-[-100px] md:ml-[1150px] ml-[250px]  ">
                                <IoBookmarksSharp size={50} color="#a15f3e"  />
                            </div>
                        </div>
                        <ul className="grid md:grid-cols-3 grid-cols-1 px-3 w-[95%] mx-auto">
                        {relatedSearches.map((rel) => (
                            <li key={rel.id} className="text-[#3c72fc] hover:text-[#a15f3e] hover:underline px-1 py-1">
                                <a href={rel.link} className="flex items-center"> 
                                    <IoIosArrowForward /> {rel.name}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div> 
                </div>
                <div>
                    {/** questions section */}
                    <div className=" flex md:flex-row flex-col my-[30px] ">
                        <div className="  md:w-[40%] w-[90%] mx-auto px-4 md:sticky top-3 h-screen ">
                            {/** the questions */}
                            <div className=" relative">
                                <div className=" border-1 border-[#33333380] px-5 py-4">
                                    <div className="space-y-5 ">
                                    {quesAns.map((q) => (
                                        <div className="hover:text-[#a15f3e] hover:underline flex text-[#3c72fc] "
                                        onClick={() => document.getElementById(`answer-${q.id}`)?.scrollIntoView({ behavior: "smooth"})} key={q.id} >
                                        <span>{`${q.id}.  ` + ` `} </span> <h3> {q.question} </h3>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[80%] w-[95%] ">
                            {/** the questions and answers */}
                           <div className="md:p-7 p-5" data-aos='fade-right'>
                                <div>
                                    <h2 className=" font-semibold text-3xl text-center py-3"> Questions About Donians Safari Tours  </h2>
                                </div>
                                <div>
                                    {quesAns.map((q) => (
                                        <div className=" m-3" id={`answer-${q.id}`} key={q.id} data-aos='zoom-in'>
                                            <div className="flex gap-5">
                                                <span className=" border rounded-full w-[30px] h-[30px] bg-[#e99d56] text-[#fff] text-center text-xl font-bold "> {q.id} </span>
                                                <h3 className="font-bold text-2xl text-[#333] "> {q.question} </h3>
                                            </div>
                                            <div className=" p-3">
                                                <p className="px-5">
                                                    {`"${q.answer}"`}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row w-[95%] mx-auto  ">
                        <div  className=" w-[30%] mx-auto ">
                            <div></div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className=" my-10 bg-[#f3f7fb]  ">
                    {/** reviews section */}
                    <div className="w-[90%] mx-auto" >
                        <h2 className=" py-5 px-4 font-bold text-3xl ">
                            Safari Reviews 
                        </h2>
                        <div>
                            <ul className="grid md:grid-cols-2 grid-cols-1 px-3 w-[95%] mx-auto">
                            {feedbacks.map((feedback) => (
                                <li key={feedback.id}>
                                    <ReviewCard 
                                    name={feedback.name}
                                    date={feedback.uploaded_at}
                                    feedback={feedback.feedback}
                                    rate={feedback.rating}
                                    />
                                </li>
                            ))}
                            </ul>
                            <div className="flex justify-center items-center my-10">
                            <div className={`flex border-1 rounded-sm border-[#333] p-3 text-xl font-medium hover:text-[#a15f3e]  mx-10`}  onClick={() => setGiveFeedback(true)} >
                               Give Review
                            </div>
                           
                            </div> 
                        </div>
                    </div>
                   
                </div>
            </div>
            <footer data-aos='zoom-in'>
                <Footer />
            </footer>

        </section>
        {/** feedback prompt */}
        {giveFeedback && (
                <div className='fixed  md:inset-x-96 md:inset-y-7 inset-x-7 inset-y-9  bg-[#aaa] z-50 opacity-100 flex flex-col py-4 space-y-4 '>
                    <div className='flex justify-end mx-4 my-1'>
                        <GiCancel onClick={() => setGiveFeedback(false)} />
                    </div>
                    <hr className='w-[100%] mx-auto border-1 border-[#333] ' /> 
                    <div className='flex flex-col mx-3 '>
                        <label htmlFor="name" className='flex text-xl font-semibold'>Your Name</label>
                        <input type="text" value={feedName} onChange={(e) => setFeedName(e.target.value)} className=' md:w-[70%] w-[80%] mx-5 p-2 bg-[#fff] ' placeholder='your name'  />
                    </div>
                    <div className='flex flex-col  mx-3'>
                        <label htmlFor="email" className='flex text-xl font-semibold'>Your Email</label>
                        <input type="text" value={feedEmail} onChange={(e) => setFeedEmail(e.target.value)} className=' md:w-[70%] w-[80%] mx-5 p-2 bg-[#fff] ' placeholder='your email'  />
                    </div>
                    <div className='flex flex-col mx-3 '>
                        <label htmlFor="feedback" className='flex text-xl font-semibold'>Your Feedback</label>
                        <textarea name="feedback" className=' md:w-[70%] w-[80%] mx-5 p-2 bg-[#fff] ' 
                        placeholder='write feedback' maxLength={maxTextLength} value={feedText} onChange={handleFeed} id="" rows={4} />
                        <p>
                            {maxTextLength - feedText.length} characters left
                        </p>
                    </div>
                    <div className='flex flex-col mx-3 '>
                        <label htmlFor="rating" className='flex text-xl font-semibold'>Rate us? </label>
                        <div className="my-5 flex justify-center items-center">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1
                                return (
                                    <FaStar
                                    key={starValue}
                                    size={20}
                                    className={`${starValue <= feedRating ? 'text-[#a15f3e]' : 'text-[#333] '}`}  
                                    onClick={() => setFeedRating(starValue)} />                                  
                                )
                            })}
                        </div>
                    </div>
                    <div className=' flex items-center mx-auto '>
                        <div className={`flex  border-1 rounded-sm border-[#333] p-3 text-xl font-medium hover:text-[#a15f3e]  mx-10`} onClick={handleSubmit} >
                            Submit
                        </div>
                    </div>
                </div>
        )}
        </>
    )
}

export default Home
