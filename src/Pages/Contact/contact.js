import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../../Assets/images/about-bg.jpg'
import NikosLogo from '../../Assets/Icons/logo-nikos.png'
import IG from '../../Assets/Icons/logo-instagram.png'
import FB from '../../Assets/Icons/logo-facebook.png'
import SC from '../../Assets/Icons/logo-soundcloud.png'
import './contact.scss'

export default function Contact() {
    
    return (
        <div className="contact_container">
            <div className="home_background">
              <img className="background_img" src={Background} alt="background"/>
            </div>

            <h2 className="contact_title">
                Contact 
            </h2>

            <div className="contact_logo">
                <img src={NikosLogo} alt="Nikos Logo"/>
            </div>

            <div className="contact_info">
                <div className="contact_para">
                    <p>Nikos at DADC <br/>Private tattoo shop <br/>- <br/>By appointment only <br/>from Tuesday to Saturday from 12 to 7pm <br/>- <br/>Montmartre, Paris 18th <br/>- <br/>Tel : +33 (0)177 162 561 <br/>Mail : contact@delartouducochon.fr</p>
                </div>
                <div className="contact_socials">
                <Link to={{ pathname: "https://www.instagram.com/nikos_dadc/" }} >
                    <img src={IG} alt=""/>
                </Link>
                <Link to="https://www.facebook.com/NIK%C3%98S-DADC-224410048355496">
                    <img src={FB} alt=""/>
                </Link>
                <Link to={{ pathname: "https://soundcloud.com/nikos9" }} >
                    <img src={SC} alt=""/>
                </Link>
                </div>
            </div>

        </div>
    )
}
