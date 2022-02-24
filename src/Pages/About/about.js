import React from 'react'
import { Link } from 'react-router-dom'
import NikosLogo from '../../Assets/Icons/logo-nikos.png'
import Nikos from '../../Assets/images/Nikos.png'
import Background from '../../Assets/images/about-bg.jpg'
import './about.scss'

function About() {
    return (
        <div className="about_container">

            <div className="home_background">
                <img className="background_img" src={Background} alt="background"/>
            </div>

            <div className="about_picture">
                <img src={Nikos} alt="Nikos Portrait"/>
            </div>

            <div className="about_logo">
                <img src={NikosLogo} alt="Nikos Logo"/>
            </div>

            <h2 className="about_titlesecond">
                    ABOUT
                </h2>
            
            <div className="about_txt">
                <h2 className="about_title">
                    ABOUT
                </h2>

                <p className="about_para">“Hierarchy tires me quickly. Tattooing has always been a game, an uninhibited exploration. At 13, I tried to tattoo myself in English class with Indian ink and a compass. The years that followed, I had fun on my legs, those of my friends ...</p>
                <p>Far from the standard figurative tattoos, I explore a style more akin to contemporary painting, almost always in black. Largely influenced by Kandinsky, Picasso and Mondrian, the lines and curves of the "controlled skids" are fused. I superimpose my visuals like a DJ mixing tracks during a rave set. I experiment with digital collage, freehand and a little free machine improvisation to compose patterns as "ornamental abstracts." 
                I make geometric textures with ornate dreamlike sequences layered with other patterns, rhythms, etc. </p>
                <p>I owe this precious artistic freedom to my clients. Some of them are in the same alternative techno culture, and they send me music they like and give me carte blanche to draw: they understand that techno and my tattoos work in a similar way, with layers and textures on top. Whether they are underground creatives or executives, the work remains the same: to welcome slices of life, men and women who get naked during long sessions. </p>
                <p>Of course, we touch on the intimate".</p>
                <Link to={"/gallery"} className='signup_btn'>See my work  →</Link>

            </div>

            {/* <div class="scanlines"></div>
                <div className="">
            </div> */}
            
        </div>
    )
}

export default About

