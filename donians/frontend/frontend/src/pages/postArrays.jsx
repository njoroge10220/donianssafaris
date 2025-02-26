
import axios from "axios"
import { useEffect, useState } from "react"

export const Feedback = async ({name, email, feedback, rating}) =>{
    try{
        const feed = await axios.post('https://donianssafaris.com/backend/review/', {name, email, feedback, rating},{
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert('feedback uploaded successfully!')
        return feed.data;
    }catch(err){
        alert(`Error in uploading feedback: ${err.message} `)
    }
        
}
