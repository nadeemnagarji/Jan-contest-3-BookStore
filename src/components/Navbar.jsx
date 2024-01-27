import React, { useState } from 'react';
import notify from '../assets/notify.svg'
import search from '../assets/search.svg'
import logo from '../assets/logo.svg'
import diamond from '../assets/diamond.svg'
import heart from '../assets/heart.svg'
import user from '../assets/user.png'
import { useApi } from '../contexts/Bookcontext';
import axios from 'axios';
export default function Navbar() {

    let [input,setInput] = useState()

    let {setBooks} = useApi()


    

    let fetchAPi = async(Query)=>{
        try {
            let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${Query}`)
        let data = res.data.items
        console.log(data);
        setBooks(prev=>[...data,...prev])
        console.log(data);
        } catch (error) {
            
        }
        
    }
    let handleInput = ()=>{
        fetchAPi(input)
        console.log(input);
    }

    return(
       
        <div className="Navbar">
            <div className="logo">
            <img src={logo}alt="" />
            <p>KeazoNBOOKS</p>
            </div>


            <div className="inputdiv">
                <img src={search} alt="" />
                <input type="text" placeholder='search' onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={handleInput} >Search</button>
            </div>
            <div className="right-div">
                <img src={heart} alt="" />
                <img src={notify} alt="" />
                <img src={diamond} alt="" />
                <img src={user} alt="" />
            </div>
        </div>

    )
};
