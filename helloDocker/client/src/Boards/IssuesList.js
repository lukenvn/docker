import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import IssueCard from './IssueCard';
import { Container, Row } from 'react-bootstrap';

export default class IssuesList extends PureComponent {
    static propTypes = {
        issuesData: PropTypes.array,
        sprintGoals:PropTypes.string
    }

    render() {
        let issues = this.props.issuesData;
        if(!issues || issues.length ==0 ){
            return (<Container/>);
        }

        let totalCards= [];
        let cardIndex = 0;
        const numberOfCardPerPage =10;
        let numberOfPage = Math.floor(issues.length/numberOfCardPerPage);
        let issueCount =0;
        
        for (let index = 0; index <= numberOfPage;index++) {
            let issuesCards = [];
            for (let i = cardIndex; i < cardIndex+numberOfCardPerPage; i++) {
                if(i>= issues.length){
                    issuesCards.push(<IssueCard summary={""} issueKey={""} />);
                }else{
                    const element = issues[i];
                    let sprintGoal = this.props.sprintGoals.includes(element.key);
                    issuesCards.push(<IssueCard storyPoint={element.point} summary={element.summary} issueKey={element.key} sprintGoal ={sprintGoal}/>);
                }
            }
            
            issueCount += issuesCards.length;
            totalCards.push(issuesCards);
            cardIndex+=numberOfCardPerPage;
            if(issueCount ==  issues.length){
                break;
            }
        }

        return (
            <Container >
                {totalCards.map(cards => { return <><Row > {cards}</Row><div className="pagebreak" /></> })}
            </Container>)
    }
}
