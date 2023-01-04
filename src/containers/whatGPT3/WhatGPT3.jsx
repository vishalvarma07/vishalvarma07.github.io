import React from 'react';
import { Feature } from '../../components';
import './whatgpt3.css';

const WhatGPT3 = () => {
  return (
    <div className = 'gpt3__whatgpt3' id="about">
      <div className = 'gpt3__whatgpt3-feature'>
        <Feature Title="About Me" Text="I was born in Andhra Pradesh, India. I spent my childhood in different places and since I was in a constant flux, I encountered people from all walks of life and cultures, making me eager to meet new people and to strike up a discussion. I am currently pursuing masters at UTD, Texas. I am a good problem solver and I can come up with innovative ideas. Ping me on my socials if you want to collab."/>
      </div>
      <div className = 'gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Education</h1>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature Title="University of Texas, Dallas" Text="Masters in Computer Science" Technologies="GPA : 3.5/4"/>
        <Feature Title="Amrita School of Engineering" Text="Bachelor of Technology in Computer Science" Technologies="GPA : 8.76/10"/>
        <Feature Title="Sri Chaitanya Junior College" Text="Major in Maths, Physics and Chemistry" Technologies="GPA : 9.64/10"/>
      </div>
    </div>
  )
}

export default WhatGPT3