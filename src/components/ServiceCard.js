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
                <a class="text-more-info text-primary-hover" href={ props.link }>Read more</a>
            </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default ServiceCard