import React from 'react';
import './article.css';

const Article = ( {imgUrl, date, title, info} ) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-image'>
        <img src = {imgUrl} alt='imgUrl'/>
      </div>
      <div className='gpt3__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      </div>
    </div>
  )
}

export default Article