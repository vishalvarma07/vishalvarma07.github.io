import React from 'react';
import './cta.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-text'>
        <p></p>
        <h3>Did you know that I absolutely love listening to music? Check out my stats and content.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <Link to="/gamestats" onClick={() => {
                              window.scroll(0, 0);
                              }}><button className = "heartbeat"type="button">Stats</button></Link>
      </div>
    </div>
  )
}

export default CTA