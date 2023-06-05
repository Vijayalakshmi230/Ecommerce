import React from 'react'
import watch from './images/watch.jpg'
import './Firstpage.css';

function Firstpage() {
    return (
        <div className='main'>
            <div className='image'>
            <h1>Flash</h1>
                <img src={watch} alt="watch" width="1100" height="700" />
                <h2>We review and sell a range of big and oversized luxury 
                    watches that combine stunning looks with incredible values 
                    to give you something extra specail to wear upon your wrist.</h2>
            </div>
            <div className='description'>
                
                
            </div>
            
        </div>

    )
}

export default Firstpage