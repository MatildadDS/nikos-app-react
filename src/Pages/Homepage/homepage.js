import React from 'react';
import Background from '../../Assets/images/about-bg.jpg'
import './homepage.scss'

function Homepage() {


  return (
    <div className="fullapp_container">
      
      <div className="home_background">
        <img className="background_img" src={Background} alt="background"/>
      </div>

      <div className = 'home_container'>
          {/*
          <video className='video'
              autoPlay="autoplay"
              loop="loop"
              muted
              styled={{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '1'
              }}
              // ref={video}
              id="video-id"
              >
              {/* TODO make it accept multiple media types 
              <source src={VideoBackground} type="video/mp4" />
                Your browser does not support the video tag.
          </video>

            {/* <h1 className= 'title'>
                Nikos   
            </h1>
            <h3 className= 'subtitle_home'>
                Dérapages contrôlés
            </h3> */}

          <div class="container">
              <div class="glitch" data-text="NIKOS">NIKOS</div>
              <div class="glow">NIKOS</div>
              <p class="subtitle">DÉRAPAGES CONTRÔLÉS</p>
          </div>
          <div class="scanlines"></div>
            <div className="">
          </div>
        </div> 

    </div>
  );
}

export default Homepage;
