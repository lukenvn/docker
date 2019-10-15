


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, FormGroup, Form, Col, Button } from 'react-bootstrap';
export default class Search extends Component {
  static propTypes = {
    teamName: PropTypes.string,
    sprintId: PropTypes.string,
    sprintGoals: PropTypes.string,
    printOnly:PropTypes.string,
    handleSearching: PropTypes.func,
    handleTeamChange: PropTypes.func,
    handleChange: PropTypes.func,
    handlePrintOnly: PropTypes.func,
    handleSprintGoalsChange: PropTypes.func
  }
  render() {
    return (
      <div style={{ marginLeft: '30%' }}>
        <Form onSubmit={this.props.handleSearching}>

          <FormGroup as={Row}>
            <Form.Label column sm="2" style={{ textAlign: "left" }}>Team name</Form.Label>
            <Col sm="5">
              <Form.Control type="text" defaultValue="UP" placeholder="UP" name="teamName" value={this.props.teamName} onChange={this.props.handleTeamChange} />
            </Col>
          </FormGroup>

          <FormGroup as={Row}>
            <Form.Label column sm="2" style={{ textAlign: "left" }}>Sprint ID</Form.Label>
            <Col sm="5">
              <Form.Control type="text" defaultValue="7.30" placeholder="7.30" name="sprintId" value={this.props.sprintId} onChange={this.props.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup as={Row}>
            <Form.Label column sm="2" style={{ textAlign: "left" }}>Print only</Form.Label>
            <Col sm="5">
              <Form.Control type="text" placeholder="AFT-97,AFT-619" name="printOnly" value={this.props.printOnly} onChange={this.props.handlePrintOnly} />
            </Col>
          </FormGroup>

          <FormGroup as={Row}>
            <Form.Label column sm="2" style={{ textAlign: "left" }}>Sprint Goals </Form.Label>
            <Col sm="5">
              <Form.Control type="text" placeholder="AFT-97,AFT-619" name="sprintGoals" value={this.props.sprintGoals} onChange={this.props.handleSprintGoalsChange} />
            </Col>
          </FormGroup>
          <FormGroup as={Row}>
            <Col sm={{ span: 5, offset: 4 }}>
              <Button variant='primary' type='submit' >Search</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    )
  }
}
