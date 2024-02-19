import React from 'react'
import logo from '../Assets/Veerel Logo New V1 White.png'
import {Icon} from '@iconify/react'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid ex modi nemo ab quasi iusto et provident, quam magni explicabo fuga sequi deserunt eveniet aut quidem velit voluptatum quae.</p>
        {/* <div>
          <Icon icon="mdi:linkedin" color="white"/>

        </div> */}
      </div>
      <div className='footer-grid'>
        <div className='footer-coloumn'> 
          <h6>Solutions</h6>
          <ul>
            <li><a>Lighting</a></li>
            <li><a>Sound</a></li>
            <li><a>AR/VR</a></li>
            <li><a>Machinary</a></li>
          </ul>
        </div>
        <div className='footer-coloumn'>
          <h6>Support</h6>
          <ul>
            <li><a>Pricing</a></li>
            <li><a>Documentation</a></li>
            <li><a>Guides</a></li>
          </ul>
        </div>
        <div className='footer-coloumn'>
          <h6>Company</h6>
          <ul>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>History</a></li>
            <li><a>Clients</a></li>
          </ul>
        </div>
        <div className='footer-coloumn'>
          <h6>Legal</h6>
          <ul>
            <li><a>Claim</a></li>
            <li><a>Policy</a></li>
            <li><a>Terms</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer