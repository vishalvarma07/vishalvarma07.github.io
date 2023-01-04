import React from 'react';
import './feature.css';

const Feature = ({Title, Text, Technologies}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
        <h1>{Title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{Text}</p>
        <p>{Technologies}</p>
      </div>
    </div>
  )
}

export default Feature