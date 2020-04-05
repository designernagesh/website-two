import React from 'react'
import { Card } from 'react-bootstrap'
//import img01 from '../images/img-01.jpg'.

const ServiceCard = (props) => {
    return(
        <>
        <div className="col-md-4">
            <Card>
            <Card.Img variant="top" src={ props.imgUrl } style={{ height: '250px' }} />
            <Card.Body> 
            <Card.Title>{ props.title }</Card.Title>
                <Card.Text>
                { props.desc }
                </Card.Text>
                <a href={ props.link }>Go somewhere</a>
            </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default ServiceCard