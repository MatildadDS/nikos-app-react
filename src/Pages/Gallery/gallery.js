import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NikosLogo from '../../Assets/Icons/logo-nikos.png'
import dataSlider from './dataSlider.js'
import BtnSlider from '../../Components/BtnSlider/btnSlider'
import Background from '../../Assets/images/about-bg.jpg'
import './gallery.scss'

export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => {
        
        if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress){

            setSlideAnim({index: slideAnim.index + 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index + 1, inProgress: false})
            }, 400)
        }
        else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress){

            setSlideAnim({index: 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: 1, inProgress: false})
            }, 400)
        }
    }

    const prevSlide = () => {

        if(slideAnim.index !== 1 && !slideAnim.inProgress){

            setSlideAnim({index: slideAnim.index - 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index - 1, inProgress: false})
            }, 400)

        }
        else if (slideAnim.index === 1 && !slideAnim.inProgress){

            setSlideAnim({index: 8, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: 8, inProgress: false})
            }, 400)
        }
    }


    const moveDot = index => (
        setSlideAnim({index: index, inProgress: false})
    )

    return (
        <div className="gallery_container">
            <div className="home_background">
                <img className="background_img" src={Background} alt="background"/>
            </div>

            <div className="slider_logo">
                <img src={NikosLogo} alt="Nikos Logo"/>
            </div>

            <h2 className="slider_title">
                My Work 
            </h2>
        
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={obj.id}
                        className={slideAnim.index === index + 1 ?
                        "slide active-anim" : "slide"}
                        >
                            <img src={`/TattooGallery/img${index + 1}.jpeg`} alt=""/>
                        </div>
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction= {"next"}/>
                <BtnSlider moveSlide={prevSlide} direction= {"prev"}/>

                <div className="container-dots">
                    {Array.from({length: 8}).map((item, index) => {
                        return <div 
                        className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                        onClick={() => moveDot(index + 1)}
                        ></div>
                    })}
                    
                    {/*<div className={slideAnim.index === 1 ? "dot active" : "dot"}></div>
                    <div className={slideAnim.index === 2 ? "dot active" : "dot"}></div>
                    <div className={slideAnim.index === 3 ? "dot active" : "dot"}></div>
                    <div className={slideAnim.index === 4 ? "dot active" : "dot"}></div>
                    <div className={slideAnim.index === 5 ? "dot active" : "dot"}></div> */}
                </div>
            </div>
            {/* <div class="scanlines"></div>
                    <div className="">
            </div> */}
            <Link to={"/booking"} className='gallery_btn'>See my work  →</Link>

        </div>
    )
}
