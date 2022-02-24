import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../../Assets/images/about-bg.jpg'
import NikosLogo from '../../Assets/Icons/logo-nikos.png'
import Esoj from '../../Assets/images/Esoj.png'
import Froupille from '../../Assets/images/Froupille.png'
import Phalippon from '../../Assets/images/Phalippon.png'
import Tapenade from '../../Assets/images/TapenadeRecords.png'
import Tweak from '../../Assets/images/TweakDesign.png'
import './ecosystem.scss'



export default function Ecosystem() {
    return (
        <div className="ecosystem_container">
            <div className="home_background">
              <img className="background_img" src={Background} alt="background"/>
            </div>

            <div className="ecosystem_logo">
                <img src={NikosLogo} alt="Nikos Logo"/>
            </div>

            <h2 className="ecosystem_title">
                Ecosystem 
            </h2>

            <p className="ecosystem_intro">'My friends are smart, creative and talented. <br/> They feed my imagination every day. <br/>
            Take a look at their universe.'</p>

            <div className="card_container">
                <div className="card">
                    <h3>ESOJ</h3>
                    <p>Handmade metal sculptures</p>
                    <img src={Esoj} alt=""/>
                    <Link to={{ pathname: "https://www.instagram.com/esoj.jose/" }} className="card_link" target="_blank">See More</Link>
                </div>

                <div className="card">
                    <h3>LA FROUPILLE</h3>
                    <p>Handmade silk-screening & recycled paper</p>
                    <img src={Froupille} alt=""/>
                    <Link to={{ pathname: "https://www.instagram.com/la_froupille/" }} className="card_link" target="_blank">See More</Link>
                </div>

                <div className="card">
                    <h3>TWEAK</h3>
                    <p>Professional graffiti artist & sculptures</p>
                    <img src={Tweak} alt=""/>
                    <Link to={{ pathname: "https://www.instagram.com/tweakdesign/" }} className="card_link" target="_blank">See More</Link>
                </div>

                <div className="card">
                    <h3>TAPENADE R.</h3>
                    <p>Record Company which presses its own olives</p>
                    <img src={Tapenade} alt=""/>
                    <Link to={{ pathname: "https://www.instagram.com/tapenade_records/" }} className="card_link" target="_blank">See More</Link>
                </div>

                <div className="card">
                    <h3>R. PHALIPPON</h3>
                    <p>Crafted Upcycled lightning</p>
                    <img src={Phalippon} alt=""/>
                    <Link to={{ pathname: "https://www.instagram.com/richardphalippon/" }} className="card_link" target="_blank">See More</Link>
                </div>
            </div>

        </div>
    )
}
