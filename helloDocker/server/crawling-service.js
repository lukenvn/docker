

const sprintService = require('./sprint-service')

var sprintGoals = ['AF-26043', 'AF-25185', 'AF-24311', 'AF-25578', 'AF-25184', 'AF-25978']
var ignoreUs = []


async function findData(teamName, sprintId) {

    console.log('find for : '+teamName + ' -- sprint --- '+sprintId);
    
    let issues = await sprintService.findAllIssues(teamName, sprintId);
    let allUS = prepareIssues(issues);
    let subTasks = findAllSubTasks(issues);
    const returnObject = {
      userStories: allUS,
      subTasks: subTasks
    };
    return returnObject;
  }
  
  function generateDataString(issues) {
    
    let allUS = prepareIssues(issues);
    let subTasks = findAllSubTasks(issues);
    return "var userStories = " + JSON.stringify(allUS, null, 2) + ";\nvar subTasks =" + JSON.stringify(subTasks, null, 2) + ";";
  
  }
  
  
  
  function prepareIssues(issues) {
    return issues
      .filter(element => !ignoreUs.includes(element.key))
      .map(element => {
        let key = element.key;
        let sg = false;
        if (sprintGoals.includes(key)) {
          sg = true;
        }
        let summary = element.fields["summary"];
        let storyPoint = element.fields["customfield_10002"];
        return {
          key: key,
          summary: summary,
          point: storyPoint,
          sg: sg
        };
      });
  }
  
  function findAllSubTasks(issues) {
    let subTasks = [];
    issues.filter(element => !ignoreUs.includes(element.key)).forEach(element => {
      let key = element.key;
      let tasks = element.fields["subtasks"];
      tasks.forEach(task => {
        let status = task.fields["status"].name;
        if (task.fields["summary"].toUpperCase().includes("Team Review".toUpperCase())) {
          return;
        }
        if (status == "Resolved" || status == "Closed") {
          return;
        }
        subTasks.push({
          parent: key,
          summary: task.fields["summary"],
          status: status
        })
  
      });
  
    });
    return subTasks;
  }
  
  
  
  module.exports.findData = findData ;