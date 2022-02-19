import React from 'react'
import {Card} from 'react-bootstrap'

const SingleActivity = ({name,image,logo,place}) => {
  return (
    <Card style={{border:"none"}} className='singleActivity'>
        <Card.Img src={image} alt={name} variant='top'/>
        <Card.Body>
          <div className='logoDiv'>
            <img src={logo} alt={name}  />
          </div>
          
            <Card.Title>{name}</Card.Title>
            <Card.Text>{place}</Card.Text>
        
        </Card.Body>
        
        
        
    </Card>
  )
}

export default SingleActivity