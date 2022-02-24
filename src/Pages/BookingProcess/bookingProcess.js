import React from 'react'
import { Link } from 'react-router-dom'
import NikosLogo from '../../Assets/Icons/logo-nikos.png'
import Background from '../../Assets/images/about-bg.jpg'
import './bookingProcess.scss'

function Bookingprocess() {


    return (
        <div className="bookingProcess_container">
            <div className="home_background">
                <img className="background_img" src={Background} alt="background"/>
            </div>

            <div className="booking_logo">
                <img src={NikosLogo} alt="Nikos Logo"/>
            </div>

            <h2 className="bookingProcess_title">
                Booking 
            </h2>

            <div className="bookingProcess_video">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qxlVgNcs_OM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </div>

                <div className="bookingProcess_txt">
                    <h3 className="bookingProcess_subtitle">
                        PROCESS
                    </h3>
                    <p>
                    My abstract geometrical work is always organized in three steps on the day of the session: once the intention and the template are defined by you, I draw a first time on my graphic palette, working by digital collage. We exchange on this first drawing you will make several proposals, as my work starts from your morphology, I finish it by improvising on your skin with a felt pen.</p>
                    <p>Therefore I never show the drawings/montages/projects of the future tattoo before the first session and we will not have any exchange before the drawing appointment but I will take the time to discuss it and we will make all the modifications that you wish, if of course, they are feasible, the objective being that it is beautiful! 
                    Also know that I don't do small tattoo projects. </p>
                    <p>Still interested ? <br/> Please, create an account and send me your project idea.</p>
                    <Link to={"/signup"} className='signup_btn'>Go Further  →</Link>
                </div>
        </div>
    )
}

export default Bookingprocess
