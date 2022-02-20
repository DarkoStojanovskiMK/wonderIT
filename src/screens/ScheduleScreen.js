import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {ScheduleContext} from '../context/ScheduleContext'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import { activitiesArray } from '../components/data'
import SchedulePics from '../components/SchedulePics'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ScheduleScreen = ({}) => {
  const {activity, setActivity, setIsScheduled, duration, date, setDate, fullActivity, setFullActivity} = useContext(ScheduleContext)
  const navigate = useNavigate()
  const [time,setTime]=useState('') 
  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState(new Date(0))
  const [weekDay, setWeekDay] = useState('')

  
  const handleOnChange=(x)=>{
    setStartDate(x)
    setWeekDay(x.toLocaleDateString('default', { weekday: 'long' }))
    setDate(x.toLocaleDateString('default', { month: 'long', day: 'numeric'}))
    setTime(x.toString().substr(15,6))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    let newActivity = {activity, duration, date, weekDay, time}
    setFullActivity([...fullActivity, newActivity])
    setIsScheduled(true)
    navigate('/')
  }
  
  return (
    <div className='scheduleScreen'>
      <Container style={{maxWidth:'700px', margin:'auto'}} >
        <Row>
          <Link to='/' style={{width:'30px'}}>
            <button className='closeBtn'>x</button>
          </Link>
        </Row>
        <Row className='mt-5'>
          <h3 className='mb-5'>Schedule your activity</h3>
          <Form onSubmit={handleSubmit} >
            <Row>
              {activitiesArray.map((activity,index)=>{
                return <Col key={index} xs={3} onClick={()=>setActivity(activitiesArray[index])}>
                    <SchedulePics 
                    logo={activity.logo}
                    name={activity.name} 
                    index={index}
                    />
                </Col>
              })}
            </Row>
            <Row>
              <Col className='mt-5 pickers'>
                <p className='descriptiveP'>How long do you want to do this activity?</p>
                <div className="group mb-3">
                    <DatePicker
                      selected={startTime}
                      onChange={(newTime) => setStartTime(newTime)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="H:mm"
                      timeFormat="H:mm"
                      showPopperArrow={false}
                      className='form-control timePicker'
                      popperClassName="popper"
                    />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mt-2 pickers'>
                <p className='descriptiveP'>When do you want to do this activity?</p>
                <DatePicker
                  selected={startDate}
                  showPopperArrow={false}
                  onChange={(date) =>handleOnChange(date)}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className='form-control dateTimePicker'
                  popperClassName="popper"
                />
              </Col>
            </Row>    
            <Row style={{marginTop:'80px', marginBottom:'30px'}}>
              
                    <Button type='submit'
                    style={{maxWidth:'90%', margin:'auto', letterSpacing:'1.5px'}} 
                    bsPrefix='submitBtn' 
                    
                    disabled={!activity || !startTime || !date || !time}
                    >SCHEDULE</Button>
             
            </Row>
            
          </Form>
        </Row>
        
      </Container>
    </div>
    
  )
}

export default ScheduleScreen