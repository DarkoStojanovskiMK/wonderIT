import React, {useContext} from 'react'
import {ScheduleContext} from '../context/ScheduleContext'


const SchedulePics = ({logo, name, index}) => {
  const {activity} = useContext(ScheduleContext)


  return (
    
    <div className= 'schedulePicOutline'>
              <div className={activity.id===(index+1) ? 'schedulePic activityBorder' : 'schedulePic'}>
                <img src={logo} alt={name} />
              </div>
              <p>{name}</p>
    </div>
  )
}

export default SchedulePics