import React from 'react';
import Statsmusic from '../../components/statsmusic/Statsmusic';
import './music.css';
import minutes from '../../assets/minutes.png';
import artist from '../../assets/artist.png';
import genre from '../../assets/genre.png';
import tops from '../../assets/tops.png';
import topsong from '../../assets/topsong.png';
import spotify from '../../assets/spotify.png';

const Music = () => {
  return (
    <div className='portfolio-music'>
        <div className='portfolio-music-text puff-in-center'>
          <img src={spotify} alt="spotify"/>
          <h1 className='gradient__text'>MaFav 2022</h1>
        </div>
        <div>
          <Statsmusic image={minutes} Title="Minutes spent listening to Music" Text="About 21 days of the year spent listening to music. According to spotify statistics, that's more than 83% of other listeners in the Unites States." Technologies=""/>
          <Statsmusic image={genre} Title="Top Genres" Text="I am a huge fan of pop culture and EDM music. I've explored 73 different genres this year." Technologies="Who even knew there were so many?"/>
          <Statsmusic image={artist} Title="Favorite Artist" Text="Of the 1419 artists that I've listened to this year, 1573 minutes were spent listening to Dua Lipa's songs which puts it at the top 0.5% listeners of hers." Technologies=""/>
          <Statsmusic image={topsong} Title="Top Song" Text="This song was love at first listen. Lost frequencie's beats and Calum Scott's voice just hit right." Technologies="138 total listens with the most on 3 Apr 2022."/>
          <Statsmusic image={tops} Title="Top 5 songs" Text="Of the 1522 songs I've listened to this year. These made it to the top 5." Technologies="Do give them a try."/>
        </div>
    </div>
  )
}

export default Music