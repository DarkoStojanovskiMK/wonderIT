import React, {useState, useContext} from 'react'
import { ScheduleContext } from '../context/ScheduleContext'

const SchedulePics = ({logo, name, index}) => {
    
  return (
    
    <div className='schedulePicOutline'>
              <div className='schedulePic'>
                <img src={logo} alt={name} />
              </div>
              <p>{name}</p>
    </div>
  )
}

export default SchedulePics