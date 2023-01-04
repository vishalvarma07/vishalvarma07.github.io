import React from 'react';
import { Footer, Blog, Possibility, Features, Header, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import './App.css';
import Music from './containers/music/Music';

const MenuMainPage = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About Me</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='#achievements'>Achievements</a></p>
    <p><a href='#contactme'>Contact Me</a></p>
  </>
)

// const Menu = () => (
//   <>
//     <p><a href="gamestats/music">Music</a></p>
//     <p><a href="gamestats/games">Games</a></p>
//   </>
// )

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {
          <div className='App'>
            <div className='gradient__bg'>
              <Navbar Menu={MenuMainPage}/>
              <Header/>
            </div>
            <WhatGPT3/> 
            <Brand/>
            <Features/>
            <Possibility/>
            <Blog/> 
            <CTA/> 
            <Footer/> 
          </div>} />
        <Route path="/gamestats" element={
          <div className='App'>
            <div className='gradient__bg'> 
              {/* <Navbar Menu={Menu}/> */}
            </div>
            <div>
              <Music/>
            </div>
          </div>}/>
      </Routes>
    </Router>
  )
}

export default App