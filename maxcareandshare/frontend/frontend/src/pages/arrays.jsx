
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Logo = () => {
    const [mainLogo, setmainLogo] = useState([]) 

   async function getLogo(){
    try{
        const logo = await axios.get('http://127.0.0.1:8000/api/logo/')
        setmainLogo(logo.data)
    }catch(err){
     alert(`Error fetching logo: ${err.message}`)   
    }
   }

   useEffect(() =>{
    getLogo()    
   }, [])

   return mainLogo
}

export const Images  = () => {
    const [img, setImg] = useState([])

    async function getImages(){
        try{
            const imgs = await axios.get('http://127.0.0.1:8000/api/image/')
            setImg(imgs.data)
        }catch(err){
            alert(`Error fetching images: ${err.message}`)   
        }
    }

    useEffect(() =>{
        getImages()
    }, [])

    return img
}

export const NavbarLinks = () =>{

    const links = [
        {id:1, text:'About Us', link:'about-us'},
        {id:2, text:'Our work', link:'our-work'},
        {id:3, text:'Get Involved', link:'get-involved'},
        {id:4, text:'what we do', link:'what-we-do'},
        {id:5, text:'why we do it', link:'why-we-do-it'},
        {id:6, text:'ways you can help', link:'ways-you-can-help'},
    ]
    return links
}

