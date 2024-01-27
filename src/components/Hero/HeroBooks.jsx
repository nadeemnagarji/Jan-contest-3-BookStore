import React from 'react';
import BookImg from '../assets/BookImg.png'
export default function HeroBooks() {
    return(
         
       <div className='hero-books'>

            <img src={BookImg}  alt="" />
            <div className='hero-books-details'>
                <h3>Title</h3>
                <p>Description - Loreum ipsum dolor sit amet, 
                    consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                    </p>
                    <button>Now Read!</button>
            </div>
       </div>
       
    )
};
