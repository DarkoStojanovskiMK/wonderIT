import React from 'react'
import {Card} from 'react-bootstrap'

const SingleActivity = ({name,image,logo,place}) => {
  return (
    <Card style={{border:"none", borderRadius:'15px'}} className='singleActivity'>
        <Card.Img src={image} alt={name} variant='top'/>
        <Card.Body>
          <div className='logoDiv'>
            <img src={logo} alt={name}  />
          </div>
          <div className='singleActivityText'>
            <h4 style={{lineHeight:'15px'}}><strong>{name}</strong></h4>
            <p style={{color:'#7D8184'}}>{place}</p>
          </div>
            
        
        </Card.Body>
        
        
        
    </Card>
  )
}

export default SingleActivity