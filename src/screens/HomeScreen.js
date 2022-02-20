import React, {useContext} from 'react'
import { ScheduleContext } from '../context/ScheduleContext'
import Header from '../components/Header'
import SingleActivity from '../components/SingleActivity'
import SchedulePics from '../components/SchedulePics'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Button} from 'react-bootstrap'
import { activitiesArray } from '../components/data'
import plus from '../pictures/icn_plus.png'

const HomeScreen = () => {
  
  const { fullActivity,isScheduled} = useContext(ScheduleContext)
  
    return (
   <>
      <Header/>
      <Container style={{maxWidth:'700px', margin:'auto', textAlign:'center'}} className='mt-3'>
       
          <h6><strong>Track Your Activity</strong></h6>
          <Row>
                {activitiesArray.map((activity,index)=>{
                  return <Col key={index} xs={6} style={{display:'grid', justifyContent:'center'}}>
                  <SingleActivity 
                  name={activity.name}
                  image={activity.image}
                  logo={activity.logo}
                  place={activity.place}/>
              </Col>
              })}
          </Row>
          <Row style={{ textAlign:'left'} }>
            <h3>Scheduled Activities</h3>
            {fullActivity.length<1 && <p className='descriptiveP'>You don't have any activities scheduled yet.</p>}
                {isScheduled && fullActivity.map((item, index)=>{
                  
                  return <Col key={index} xs={3} md={2} style={{textAlign:'center'}}>
                    <p><strong>{item.date}{item.day}</strong></p>
                    <p>{item.weekDay}</p>
                    
                      <SchedulePics logo={item.activity.logo} style={{boxShadow: '0px 10px 30px #42596529'}}/>
                    <p>{item.time}</p>
                  </Col>
                })}
          </Row>
          <Row>
              <Link to='/schedule' style={{textDecoration:'none'}}>
                <Row>
                    <Button 
                      bsPrefix='scheduleBtn' className='mt-3 mb-5' 
                      style={{maxWidth:'90%', margin:'auto', letterSpacing: '1.5px'}}>
                      <span><img src={plus} alt="+" /></span> SCHEDULE ACTIVITY
                    </Button>
                </Row>
                
              </Link>
                
          </Row>
        
      </Container>
   </>  
        
  )
}

export default HomeScreen