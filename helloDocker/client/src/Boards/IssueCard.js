


import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card,Col } from "react-bootstrap";
import './IssueCard.css'

export default class IssueCard extends PureComponent {
    static propTypes = {
        storyPoint: PropTypes.number,
        summary: PropTypes.string,
        sprintGoal: PropTypes.bool,
        issueKey: PropTypes.string
    }

    render() {
        return (
            <div>
                <Col >
                    <Card style={{ width: '450px', height: '260px', marginTop: '10px' }} className='border border-dark'>
                        <Card.Header style={{height:'80px'}}>
                            <h5 className='story-key'>
                                {this.props.issueKey}
                            </h5>
                            <Card.Img variant="top" src="https://cdn1.iconfinder.com/data/icons/web-design-seo/512/18-512.png" style={{ width: '60px', float: 'right' }} className={this.props.sprintGoal?'':'hide-sprint-goal'} />
                        </Card.Header>
                        <Card.Body className=' font-weight-bold' style={{ fontSize: 'x-large' }} >
                            <Card.Text>{this.props.summary}</Card.Text>
                        </Card.Body>
                        <h3 class="story-point"> {this.props.storyPoint}</h3>

                    </Card>
                </Col>
            </div>
        )
    }
}
