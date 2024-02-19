import React from 'react'
import ImageCarousel from './ImageCarousel'
import A1 from '../Assets/A1.jpg'
import A2 from '../Assets/A2.jpg'
import A3 from '../Assets/A3.jpg'
import A4 from '../Assets/A4.jpg'
import ImageCarousel2 from './ImageCarousel2'

const Projects = () => {
    const card1 = [
        {
            url:A1,
            title:'IMAGE 1',
        },
        {
            url:A2,
            title:'IMAGE 2',
        },
        {
            url:A3,
            title:'IMAGE 3',
        },
        {
            url:A4,
            title:'IMAGE 4',
        },
    ]

    const card2 = [
        {
            url:A1,
            title:'IMAGE 1',
        },
        {
            url:A2,
            title:'IMAGE 2',
        },
        {
            url:A3,
            title:'IMAGE 3',
        },
        {
            url:A4,
            title:'IMAGE 4',
        },
    ]

  return (
    <div id='projects' className='projects'>
        <h1>PROJECTS GALLERY</h1>
        <ImageCarousel images={card1}/>
        <ImageCarousel2 images={card2}/>
        <ImageCarousel images={card2}/>
        <ImageCarousel2 images={card2}/>
    </div>
  )
}

export default Projects