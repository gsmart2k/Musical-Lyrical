import React, { useState } from 'react';
import axios from 'axios'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import {Link} from "react-router-dom"
import Lyricspage from "../component/lyricspage"



const Searchbar = (props)=>{

    const [input, setInput]  = useState("")
    
    // const handleChange=(e)=>{
    //     setInput(e.target.value)
    // }
    

 const getResult = (event)=>{
    
  
        // console.log(input)

        const userquery = props.searchInput;
    
        let splitted = userquery.split(".")
        const trackname = splitted[0]
        const trackauthor = splitted[1]

        console.log(trackname)
        console.log(trackauthor)
        
        axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=04be375153fe07e08f36e463316c6f2f&q_track=${trackname}&q_artist=${trackauthor}&format=json`).then(res=>{
           
        setInput(res.data.message.body.lyrics.lyrics_body)
            
        })
    }
   
    console.log(input)
    const handleSubmit=(e)=>{
        console.log(e)
    }

    return(
        <React.Fragment>
           
        <div className="searchbar">
            <Flip>
                <div className="wrapper">
                    <input searchinput={props.searchInput} onChange={props.onSearchChange} placeholder="Music Title" type="text" name="search-bar"/>
            
                <button  onClick={getResult} className="search-button">0</button>
                
             </div>
            </Flip>
            </div>
         
    
         <Link to= "/lyrical">  <div className="circle one"></div> </Link>
        <div className="circle two"></div>
        <div className="circle three"></div>
        <div className="circle four"></div>
        
        </React.Fragment>
         )
}
export default Searchbar;