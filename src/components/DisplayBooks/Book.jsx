import React from 'react';
import image from '../../assets/BookImg.png'
export default function Book({thumbnail}) {
    return(
        <div className='BookImg'>        
        <img src={thumbnail} alt="" />
        </div>

       
    )
};
