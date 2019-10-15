import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import IssuesList from './Boards/IssuesList'

import 'bootstrap/dist/css/bootstrap.css';
import TasksList from './Boards/TasksList';
import Search from './Search';

import handleSearching  from './handleSearching'
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blocking: false,
      issuesData: [],
      tasksData: [],
      teamName: '',
      sprintId: '',
      sprintGoals: '',
      printOnly:''
    };
    this.handleTeamChange = this.handleTeamChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearching = this.handleSearching.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSprintGoalsChange = this.handleSprintGoalsChange.bind(this);
    this.handlePrintOnly = this.handlePrintOnly.bind(this);

    this.toggleBlocking = this.toggleBlocking.bind(this);
  }



  componentDidMount() {
    this.handleSearching(this.state.teamName, this.state.sprintId);
    document.title = "Hello from UP!"
  }
  toggleBlocking() {
    this.setState({ blocking: !this.state.blocking });
  }
  handleSubmit(event) {
    event.preventDefault();
    let sprintId = event.target.sprintId.value;
    let teamName = event.target.teamName.value;
    this.handleSearching(teamName, sprintId);
  }

  handleSearching(teamName, sprintId) {

    this.toggleBlocking();
    handleSearching(teamName, sprintId, (result) => {
      this.setState({
        issuesData: result.userStories,
        tasksData: result.subTasks
      });
      this.toggleBlocking();
    }, (error) => {
      console.log(error);
      this.setState({
        issuesData: [],
        tasksData: []
      });

      this.toggleBlocking();
    });
  }
  handlePrintOnly(event){
    let printOnly = event.target.value;
    
    let issuesData = this.state.issuesData;
    let tasksData = this.state.tasksData.filter(e=>printOnly.includes(e.parent));
    let data= issuesData.filter(element=>printOnly.includes(element.key));
    this.setState({ printOnly: printOnly, issuesData: data, tasksData: tasksData });

  }

  handleSprintGoalsChange(event) {
    this.setState({ sprintGoals: event.target.value });
  } 
  handleChange(event) {
    this.setState({ sprintId: event.target.value });
  }
  handleTeamChange(event) {
    this.setState({ teamName: event.target.value });
  }
  render() {

    return (
      <div className="App">
        <BlockUi tag="div" blocking={this.state.blocking}>
          <div className='no-print'>
            <Header />
            <Search teamName={this.state.teamName} sprintId={this.state.sprintId} sprintGoals={this.state.sprintGoals}
              printOnly={this.state.printOnly}
              handleSearching={this.handleSubmit} handleChange={this.handleChange}
              handleTeamChange={this.handleTeamChange}
              handleSprintGoalsChange= {this.handleSprintGoalsChange}
              handlePrintOnly = {this.handlePrintOnly} />
          </div>

          <div class="pagebreak"> </div>

          <IssuesList issuesData={this.state.issuesData} sprintGoals={this.state.sprintGoals} />
          <div className="pagebreak"> </div>
          <TasksList tasksListData={this.state.tasksData} />

        </BlockUi>
      </div>
    )
  }
}

export default App;
