import React from 'react';
import './brand.css';
import {react, mysql, express, node, python, html5, css, js} from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand' id="projects">
      <div className='gpt3__brand-heading'>
        <h3 className='gradient__text'>Technical Skills</h3>
      </div>
      <div className='gpt3__brand-images'>
          <div className='jello-horizontal'><img src={react} alt='react' /></div>
          <div className='jello-horizontal'><img src={mysql} alt='mysql' /></div>
          <div className='jello-horizontal'><img src={express} alt='express' /></div>
          <div className='jello-horizontal'><img src={html5} alt='html5' /></div>
          <div className='jello-horizontal'><img src={node} alt='node' /></div>
          <div className='jello-horizontal'><img src={css} alt='css' /></div>
          <div className='jello-horizontal'><img src={js} alt='js' /></div>
          <div className='jello-horizontal'><img src={python} alt='python' /></div>
      </div>
    </div>
  )
}

export default Brand