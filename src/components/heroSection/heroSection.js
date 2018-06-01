import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './heroSection.css';

class HeroSection extends Component {
  render() {
    return (
      <div className="hero pa3">
        <div className="outer">
            <div className="middle">
                <div className="heroFlex">
                    <div className="w-40 mt4">
                        <p className="f1 white mb3">Pellentesque molestie enim sit amet metus porttitor porta. Sed viverra massa est, eu tincidunt lectus semper eu.</p>
                    </div>
                    
                    <div className="video player-wrapper w-40">
                        <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=JVL75J7RPdc'
                            width='100%'
                            height='287px'
                        />
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default HeroSection;
