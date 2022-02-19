import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {ScheduleContext} from '../context/ScheduleContext'
import surfLogo from '../pictures/surf@2x.png'
import hikeLogo from '../pictures/hike@2x.png'
import weightsLogo from '../pictures/weight@2x.png'
import spinLogo from '../pictures/spin@2x.png'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { activitiesArray } from '../components/data'
import SchedulePics from '../components/SchedulePics'
import { Link } from 'react-router-dom'
import WheelPicker from 'react-simple-wheel-picker';
import { days } from '../components/data'




const ScheduleScreen = ({}) => {
  const {activity, setActivity, setIsScheduled, duration, setDuration, date, setDate, fullActivity, setFullActivity,id,setId} = useContext(ScheduleContext)
  const navigate = useNavigate()
  const [settingTime,setSettingTime] =useState(false) 

  const handleSubmit = (e)=>{
    e.preventDefault()
    let newActivity = {activity, duration, date}
    setFullActivity([...fullActivity, newActivity])
    console.log(fullActivity)
    setIsScheduled(true)
    navigate('/')
    
  }
  

  return (
    <div className='scheduleScreen'>
      <Container style={{maxWidth:'900px'}}>
        <Button>x</Button>
        <Form onSubmit={handleSubmit}>
          <h3>Schedule your activity</h3>
          <div className="row">
            {activitiesArray.map((activity,index)=>{
              return <Col key={index} xs={3} onClick={()=>setActivity(activitiesArray[index])}>
                  <SchedulePics logo={activity.logo} name={activity.name} index={index}/>
              </Col>
            })}
          </div>
          <div >
           
            
          </div>
          <Form.Group >
            <p>How log do you want to do this activity</p>
            <Form.Control style={{float:'left'}}/>
            <Button type='button' onClick={()=>setDuration(15)}>l</Button>
          </Form.Group>
          <div className="wheelPicker">
          
           
            

          </div>
          
          <Form.Group >
            <p>When do you want to do this activity</p>
            <Form.Control style={{float:'left'}} />
            <Button type='button' onClick={()=>setDate(28)}>l</Button>
          </Form.Group>
          {/* <Link to='/'> */}
            <Button type='submit'>Schedule</Button>
          {/* </Link> */}
          
        </Form>
      </Container>
    </div>
    
  )
}

export default ScheduleScreen