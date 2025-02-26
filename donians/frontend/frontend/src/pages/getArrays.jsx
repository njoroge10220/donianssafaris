
import axios from "axios"
import { useEffect, useState } from "react"


// LOGO

export const Logo = () =>{
    
    const [mainLogo, setMainLogo] = useState([])
    async function getLogo(){
        try{
            const logos = await axios.get('https://donianssafaris.com/backend/logo/');
            setMainLogo(logos.data)
        }catch(err){
            alert(`Errors in fetching logo:${err.message}`)
        }
    }

    useEffect(() =>{
        getLogo()
    }, [])

    return mainLogo
}


//SAFARI PLACES

export const SafariPlace = () =>{
    const [places, setPlaces] = useState([])

    async function getPlace(){
        try{
            const safaris = await axios.get("https://donianssafaris.com/backend/safariPlace/")
            setPlaces(safaris.data)
        }catch(err){
            alert(`Error fetching safari places: ${err.message}`)
        }
    }

    useEffect(() =>{
        getPlace()
    },[])

    return places
}

// Questions and Answers

export const QAs = () =>{
    const [queAns, setQueAns] = useState([])

    async function getQuesAns(){
        try{
            const quesAns = await axios.get("https://donianssafaris.com/backend/question/")
            setQueAns(quesAns.data)
        }catch(err){
            alert(`Error fetching question and answers: ${err.message}`)
        }
    }

    useEffect(() => {
        getQuesAns()
    }, [])

    return queAns
}


//Feedback

export const GottenFeedback = () => {
    const [feed, setFeed] =useState([])

    async function getFeedBack(){
        try{
            const feeds = await axios.get('https://donianssafaris.com/backend/review/')
            setFeed(feeds.data)
        }catch(err){
            alert(`error Fetching feedback: ${err.message}`)
        }
    }

    useEffect(() => {
        getFeedBack()
    }, [])

    return feed
}

