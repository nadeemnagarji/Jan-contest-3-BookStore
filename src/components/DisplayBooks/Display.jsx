import React, { useEffect, useState } from 'react';
import Book from './Book';
import axios from 'axios';
import { useApi } from '../../contexts/Bookcontext.jsx';


export default function Display() {
 
 
let {books,setBooks} = useApi()

let fetchAPi = async(Query)=>{
    try {
        let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${Query}`)
    let data = res.data.items
    setBooks(prev=>[...data,...prev])
    console.log(data);
    } catch (error) {
        
    }
    
}

useEffect(()=>{
     fetchAPi('harrypotter')
     fetchAPi('SherlockHolmes')
},[])

        return(
            <>
            <div className='display'>
                  
                {books&& books.filter((item=> item.volumeInfo.imageLinks)).map((item,index)=> {
                    let thumbnail = item.volumeInfo?.imageLinks.thumbnail

                   return <Book key={index} thumbnail={thumbnail} />
                })}
            </div>

            </>
        )
};
