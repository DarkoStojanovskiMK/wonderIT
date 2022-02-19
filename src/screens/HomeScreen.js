import React, {useState, useContext} from 'react'
import { ScheduleContext } from '../context/ScheduleContext'
import Header from '../components/Header'
import SingleActivity from '../components/SingleActivity'
import SchedulePics from '../components/SchedulePics'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { activitiesArray } from '../components/data'

const HomeScreen = () => {
  
  const {activity, setActivity, duration, setDuration, date, setDate, fullActivity, id, isScheduled} = useContext(ScheduleContext)
  console.log(fullActivity);
  

  
    return (
   <>
      <Header/>
      <div className='wrapper'>
          <h3>Track Your Activity</h3>
          <Row>
                {activitiesArray.map((activity,index)=>{
                  return <Col key={index} xs={6} md={3}>
                  <SingleActivity 
                  name={activity.name}
                  image={activity.image}
                  logo={activity.logo}
                  place={activity.place}/>
              </Col>
              })}
          </Row>
          <Row>
                {isScheduled && fullActivity.map((item, index)=>{

                  return <div key={index}>
                    <p>{item.date}</p>
                      <SchedulePics name={item.activity.name} logo={item.activity.logo}/>
                    <p>{item.duration}</p>
                  </div>
                })}
                  
                
          </Row>
              <Link to='/schedule'>
                <Button style={{backgroundColor:'#D97D54'}}>
                    Schedule Activity
                </Button>
              </Link>
          
      </div>
   </>  
        
  )
}

export default HomeScreen