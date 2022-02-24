import React from 'react'
import leftArrow from '../../Assets/Icons/left-arrow.svg'
import rightArrow from '../../Assets/Icons/right-arrow.svg'

export default function Btnslider({direction, moveSlide}) {
    
    return (
        <button 
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
           <img src={direction === "next" ? rightArrow : leftArrow} alt="arrow icon"/> 
        </button>
    )
}
