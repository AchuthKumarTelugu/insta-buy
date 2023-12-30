
import React from 'react'
import checkoutImage from '../assets/checkoutImage.png'
export default function Checkout () {
    return (
        <div style={{display:'flex',justifyContent:'center',alignContent:'center',margin:'5rem 0'}}> 
           <img src={checkoutImage} alt='' style={{width:'30rem'}}/>
        </div>
    )
}