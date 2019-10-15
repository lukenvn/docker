import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import TaskCard from './TaskCard';
import { Row, Container } from 'react-bootstrap';

export default class TasksList extends PureComponent {
    static propTypes = {
        tasksListData: PropTypes.array
    }
    render() {
        let tasks = this.props.tasksListData;
        if (!tasks ||tasks.length == 0) {
            return (<Container />);
        }


        let totalTasks = [];
        let taskIndex = 0;
        let numberOfTaskPerPage = 16;
        let numberOfPage = Math.floor(tasks.length / numberOfTaskPerPage);
        let taskCount =0
        for (let index = 0; index <= numberOfPage; index++) {
            let issuesCards = [];
            for (let i = taskIndex; i < taskIndex + numberOfTaskPerPage; i++) {
                if (i >= tasks.length) {
                    issuesCards.push(<TaskCard summary={""} parent={""} status={""} key={i} />);
                } else {
                    const task = tasks[i];
                    issuesCards.push(<TaskCard summary={task.summary} parent={task.parent} status={task.status} key={i} />);
                }
            }
            
            totalTasks.push(issuesCards);
            taskIndex += numberOfTaskPerPage;
            taskCount+=issuesCards.length;
            if(taskCount == tasks.length){
                break;
            }
        }

        return (
            <Container >
                {totalTasks.map(tasks => { return <><Row  > {tasks}</Row><div className="pagebreak" /></> })}
            </Container>)
    }
}
