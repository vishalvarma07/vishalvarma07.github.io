import React from 'react';
import './header.css';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import profile from '../../assets/profile.png';

const Header = () => {
  return (
    <div className='gpt3__header' id="home">
      <div className='gpt3__header-content'>
        <h1 className='text-flicker-in-glow'>
          Vishal Varma Kovoru
        </h1>
        <p>
        Uh-oh wait up....
        </p>
        <p>
        Ah there you go, that's my name. You can also refer to me as Varma. I am currently working on improving my skills at Full Stack Development.
        </p>
        <p>Actively looking for internships.</p>
        {/* <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div> */}

        <div className='gpt3__header-content__people'>
          <a target = "_blank" rel="noreferrer" href="https://github.com/vishalvarma07"><img src={github} alt='github'/></a>
          <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/in/kovoru-vishal-varma/"><img src={linkedin} alt='linkedin'/></a>
          <a target = "_blank" rel="noreferrer" href="https://www.instagram.com/vishal_varma11/"><img src={instagram} alt='instagram'/></a>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={profile} alt='ai'/>
      </div>
    </div>
  )
}

export default Header