import React from 'react'
import ImageSlider from './ImageSlider'


const ImageCarousel = ({images,title,content}) => {
    
  return (
    <div>
        <div className='project-container'>
          <ImageSlider className='image-carousel' slides={images}/>
          <div className='project-content'>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, possimus facilis quaerat obcaecati quisquam et eligendi inventore, exercitationem vitae expedita pariatur molestias voluptatem repellendus itaque quibusdam quo, velit laborum provident?</p>
          </div>
        </div>
    </div>
  )
}

export default ImageCarousel