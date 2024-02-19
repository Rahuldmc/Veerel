import React from 'react'
import bgvideo from '../Assets/moon_-_116594 (Original).mp4'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div className='home'>
      <video className='bgvid' src={bgvideo} autoPlay loop muted></video>
      <div className='content'>
        <h1>ILLUMINATE. CAPTIVATE. RESONATE.</h1>
        <p>"Illuminate spaces, captivate minds, and resonate emotions with our mastery of light, sound, and projection."</p>
        <button><Link to='about'>About Us</Link></button>
      </div>
    </div>
  )
}

export default Home