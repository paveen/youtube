import React from 'react';
import Poster from '../images/poster.png';
import channelImg from '../images/channel_profile.jpg';
import checkIconFilled from '../images/check-icon-filled.svg';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';  
 


function HomeLeftSection() {
  return (
    <div className='home-left-section'>
       <Router>  
        <div className='main-poster'>
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/07dfqQ0cvl8" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
            <div className='active-video-title'>
              <h4>
                Hai Apna Dil To Awara | Dev Anand | Waheeda Rehman | Hemant Kumar | Solva Saal | Ishtar Music
              </h4>
            </div>
            <div className='description'>
              <div className='channel-section'>
                <img src={channelImg} alt="img" className='channel-logo'/>
                <div className='channel-text'>
                  <Link to="/" >Ishtar Music</Link>  
                  <img src={checkIconFilled} alt="img" className='check-icon'/>
                  <div className='subscriber-counter'>
                    37.7M subscribers
                  </div>
                </div>
                <div className='btn-subscribe'>
                  Subscribe
                </div>
              </div>
              <div className='share-icons'>
                  hello
                </div>

            </div>
        </div>
        </Router>
    </div>
  )
}

export default HomeLeftSection