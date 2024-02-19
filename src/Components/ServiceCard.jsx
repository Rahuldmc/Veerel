import { Icon } from '@iconify/react'
import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='servicecard'>
        <Icon icon={props.icon} width={40} height={40} color='#29ACE4'/>
        <h1 className='servcehead'>{props.head}</h1>
        <p className='servicecontent'>{props.content}</p>
    </div>
  )
}

export default ServiceCard