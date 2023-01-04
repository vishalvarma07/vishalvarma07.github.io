import React from 'react';
import { Feature } from '../../components';
import './features.css';

const Features = () => {
  return (
    <div className='gpt3__features section__margin' id="possibility">
      <div className='gpt3__features-container'>
        <div className='gpt3__features-container-title'>
          <h1 className='gradient__text'>
            Projects
          </h1>
        </div>
        <div className='gpt3__features-container__features'>
          <Feature Title="Baymax" Text="A telemedicine tool to provide virtual healthcare. Secure login by adding salts to passwords and hashing using SHA256 algorithm." Technologies="Technologies :- Flutter, NodeJs, MySQL, Express"/>
          <Feature Title="Flight Delay Prediction" Text="Predicting flight delay in the month January 2020 in USA. Obtained 89% highest accuracy in comparison to various models. Gained insights using visualizations." Technologies="Technologies :- Pandas, Numpy, Sci-kit"/>
          <Feature Title="Cloud Workload Clustering" Text="Evaluated various clustering models algorithms using google cloud workload dataset. Obtained 84% accuracy. Referred multiple publications to choose an optimal approach and determine accuracy using relevant metrics." Technologies="Technologies :- Pandas, Numpy, Sci-kit, Matplotlib"/>
          <Feature Title="Anxiety Analysis" Text="Scraped 10000 latest posts from the subreddit 'Anxiety' and performed various NLP models over the data obtained. Close to 85% average accuracy over the models." Technologies="Technologies :- Python, Praw API, Sklearn, nltk, Pandas, Numpy"/>
          <Feature Title="Automated Invigilation" Text="A serverless web application for colleges/schools to create and schedule exams." Technologies="Technologies :- ReactJs, NodeJs, Google Firebase and Electron"/>
        </div>
      </div>
    </div>
  )
}

export default Features