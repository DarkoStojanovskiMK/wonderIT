import React from 'react'


const SchedulePics = ({logo, name}) => {
  

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