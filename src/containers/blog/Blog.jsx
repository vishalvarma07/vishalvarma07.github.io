import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {dsc, aws, exploreml, awsfundamentals, personality} from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog' id="achievements">
      <div className='gpt3__blog-text'>
        <h1 className='gradient__text'>Achievements</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={exploreml} date="Jan, 2021" title="Google Explore ML" info="Helped me get started with ML and Deep Learning. Hands on experience on various models and Neural networks."/>
          <Article imgUrl={dsc} date="Apr, 2021" title="2nd place in Google DSC ML Hackathon." info="116 students participated in the Hackathon. Gained highest accuracy of 92%+ on 2 datasets."/>
          <Article imgUrl={aws} date="22 Jun, 2021 - 22 Jun, 2024" title="AWS Cloud Practitioner" info="Scored 80% on the test"/>
          <Article imgUrl={awsfundamentals} date="6th Sep, 2020" title="AWS Fundamentals from Coursera." info="Learning basics of pricing plans, services offered and maintaining those services."/>
          <Article imgUrl={personality} date="18th Oct, 2018" title="Personality Enrichment" info="Had sessions with gurus from ISKCON Bangalore. Learnt the importance of patience and staying calm."/>
        </div>
      </div>
    </div>
  )
}

export default Blog