import React from 'react';
import Feature from '../feature/Feature';
import './statsmusic.css';

const Statsmusic = ({image, Title, Text, Technologies}) => {
  return (
    <div className='portfolio-statsmusic'>
        <div className='portfolio-statsmusic-image'>
            <img src={image} alt="minutes"/>
        </div>
        <div className='portfolio-statsmusic-feature'>
            <Feature Title={Title} Text={Text} Technologies={Technologies}/>
        </div>
        
    </div>
  )
}

export default Statsmusic