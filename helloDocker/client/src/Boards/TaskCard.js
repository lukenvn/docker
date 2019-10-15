
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card, Col } from 'react-bootstrap';

export default class TaskCard extends PureComponent {
  static propTypes = {
    parent:PropTypes.string,
    summary: PropTypes.string,
    status: PropTypes.string
  }

  render() {
    return (
      <div>
         <Col >
                <Card style={{ width: '450px' ,marginTop: '20px',height:'160px'}} className='border border-dark'>
                    <Card.Title as="h5" style={{position:"absolute",top:'15px',left:'20px'}}>{this.props.parent}</Card.Title>
                    <Card.Img variant="top" src="https://cdn1.iconfinder.com/data/icons/construction-and-renovation/80/Construction_renovation-06-512.png" style={{width:'50px',position:"absolute",top:'10px',right:'15px'}} />
                    <Card.Body className=' font-weight-bold' style ={{fontSize: 'x-large',marginTop:'30px'}} >
                        <Card.Text>{this.props.summary}</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
      </div>
    )
  }
}

