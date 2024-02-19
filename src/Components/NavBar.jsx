import React, { useState } from 'react';
import logo from '../Assets/Veerel Logo New V1 White.png';
import '../App.css';
import {Icon} from '@iconify/react';
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll'; 

const NavBar = () => {

  const [nav,setNav] = useState(false)

  return (
    <div className='navbar'>
        <img src={logo} alt='/'></img>
        <div className={nav ? ['menu', 'active'].join(' ') : ['menu']}>
          <ul className='items'>
              <li><Link to="/">Home</Link></li>
              <li>
                <ScrollLink to="about"
                spy={true}
                smooth={true}
                offset={40}
                duration={500}>
                About
                </ScrollLink>
            </li>  
              <li>
              <ScrollLink to="history"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}>
                History
                </ScrollLink>
              </li>
              <li>
              <ScrollLink to="projects"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}>
                Projects
                </ScrollLink></li>           
              <li>
              <ScrollLink to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Contact
                </ScrollLink>
              </li>  
          </ul>
        </div> 
        <div onClick={() => setNav(!nav)} className='mobile-btn'>
          {nav ? <Icon icon="ep:close-bold" color="#ffffff" width="30" />
          : <Icon icon="mingcute:menu-fill" color="#ffffff" width="30" /> }

          
          
        </div>
    </div>
  )
}

export default NavBar