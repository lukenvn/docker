var request = require("request");

const authorizationInfo = 'Basic <user:pass in encode base64>';

var findIssueQuery = 'project = AF AND issuetype in standardIssueTypes() AND Sprint = SPRINT_ID  AND Team = TEAM_NAME';

var findActiveSprintOptions = {
  method: 'GET',
  url: 'https://<jira>/jira/rest/agile/1.0/board/73/sprint',
  qs: { state: 'active' },
  headers:
  {
    'cache-control': 'no-cache',
    authorization: authorizationInfo
  }
};
var findIssuesOptions = {
  method: "GET",
  url: "https://<jira>/jira/rest/api/latest/search",
  qs: {
    jql: ''
  },
  headers: {
    authorization: authorizationInfo,
    'X-Requested-With':'XMLHttpRequest'
  }
};

function callRest(options,callBack) {
  return new Promise(function (resolve, reject) {
      request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var bodyJson = JSON.parse(body);
          resolve(callBack(bodyJson));
        } else {
          reject(error);
        }

      });
    });
}



module.exports = {
  findActiveSprint: function () {
    return callRest(findActiveSprintOptions,(bodyJson)=>bodyJson.values[0].id);
  }, 
  findAllIssues: function (team, sprintId) {
    findIssuesOptions.qs.jql = findIssueQuery.replace("TEAM_NAME", team).replace("SPRINT_ID", sprintId);

    console.log(findIssuesOptions.qs.jql);
    
    return callRest(findIssuesOptions,(bodyJson)=> bodyJson.issues);
  }
};
