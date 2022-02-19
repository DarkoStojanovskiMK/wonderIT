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
      <Container>
        <div className="wrapper">
          
        
          <h3>Track Your Activity</h3>
          <Row>
                {activitiesArray.map((activity,index)=>{
                  return <Col key={index} xs={6} md={3} style={{display:'grid', justifyContent:'center'}}>
                  <SingleActivity 
                  name={activity.name}
                  image={activity.image}
                  logo={activity.logo}
                  place={activity.place}/>
              </Col>
              })}
          </Row>
          <Row style={{marginTop:'100px', textAlign:'left'} }>
            {fullActivity.length<1 ? 'You dont have scheduled activities yet' : <h3>Scheduled Activities</h3>}
                {isScheduled && fullActivity.map((item, index)=>{

                  return <Col key={index} xs={3} md={2} style={{textAlign:'center'}}>
                    <p>{item.date}{item.day}</p>
                    <p>{item.weekDay}</p>
                    
                      <SchedulePics logo={item.activity.logo}/>
                    <p>{item.time}</p>
                  </Col>
                })}
          </Row>
              <Link to='/schedule'>
                <Button style={{backgroundColor:'#D97D54'}}>
                    Schedule Activity
                </Button>
              </Link>
        </div>  
      </Container>
   </>  
        
  )
}

export default HomeScreen