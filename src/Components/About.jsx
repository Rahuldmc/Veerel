import React from 'react'
// import about from '../Assets/work_space_-_3132 (540p).mp4'
import about from '../Assets/134810 (1080p).mp4'
import { Icon } from '@iconify/react'
import ServiceCard from './ServiceCard'
export const About = () => {
  return (
    <div id='about' className='about'>
      <div >
        <div className='about-container'>
          <div className='aboutvid'>
            <video  src={about} autoPlay loop muted></video>
          </div>
          <div className='about-content'>
            <h2>Our best users are all over the world with wide coverage</h2>
            <p>At Lyxis, we are a team of dedicated professionals who are passionate about technology and its transformative potential.</p>
            <ul>
              <li>
                <Icon className='margin' icon="lets-icons:check-fill" width={35} height={35} color="#29ACE4" />
                <p>Tailored Solutions for Your Unique Needs</p>
              </li>
              <li>
                <Icon className='margin' icon="lets-icons:check-fill" width={35} height={35} color="#29ACE4" />
                <p>Seasoned Experts, Trusted Advisors</p>
              </li>
              <li>
                <Icon className='margin' icon="lets-icons:check-fill" width={35} height={35} color="#29ACE4" />
                <p>Adapting to an Ever-Changing World</p>
              </li>
            </ul>
            <button>Who We Are</button>
          </div>
        </div>
        <div className='service-container'>
          <ServiceCard icon="fa:user" head="User Centered" content="We'll help you optimize resources, manage cash flow, and make informed decisions to enhance."/>
          <ServiceCard icon="fa:user" head="Scalable" content="We'll help you optimize resources, manage cash flow, and make informed decisions to enhance."/>
          <ServiceCard icon="fa:user" head="Security First" content="We'll help you optimize resources, manage cash flow, and make informed decisions to enhance."/>
          <ServiceCard icon="fa:user" head="Innovation" content="We'll help you optimize resources, manage cash flow, and make informed decisions to enhance."/>
        </div>
      </div>
    </div>
  )
}

export default About