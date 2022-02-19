import React, {useState, useContext, useEffect} from 'react'
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
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";




const ScheduleScreen = ({}) => {
  const {activity, setActivity, setIsScheduled, duration, setDuration, date, setDate, fullActivity, setFullActivity,id,setId} = useContext(ScheduleContext)
  const navigate = useNavigate()
  const [time,setTime]=useState('') 
  const [startDate, setStartDate] = useState(new Date())
  const [weekDay, setWeekDay] = useState('')
  
  
  
  const handleOnChange=(x)=>{
    setStartDate(x)
    setWeekDay(x.toLocaleDateString('default', { weekday: 'long' }))
    setDate(x.toLocaleDateString('default', { month: 'long', day: 'numeric'}))
    setTime(x.toString().substr(15,6))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(time)
    let newActivity = {activity, duration, date, weekDay, time}
    console.log(newActivity)
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
         
          {/* <Form.Group >
            <p>How log do you want to do this activity</p>
            <Form.Control 
              style={{float:'left'}}
              placeholder='15 min'
              value={duration}
              onChange={(e)=>setDuration(e.target.value)}/>
            <Button type='button' onClick={()=>setDuration(15)}>l</Button>
          </Form.Group> */}
          
          
          {/* <Form.Group >
            <p>When do you want to do this activity</p>
            
            <DatePicker 
              selected={startDate} 
               
              
              />
            <Button type='button' >l</Button>
          </Form.Group> */}
          <Form.Group >
            <p>When do you want to do this activity</p>
            
            <DatePicker
              selected={startDate}
              onChange={(date) =>handleOnChange(date) }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <Button type='button' >l</Button>
          </Form.Group>


          
            <Button type='submit'>Schedule</Button>
          

        </Form>
      </Container>
    </div>
    
  )
}

export default ScheduleScreen