
const properties = require('./properties.json')
export default function handleSearching(teamName,sprintId,onSuccess,onError){
    console.log('--seach for sprint: '+sprintId +'  of team '+teamName);

    fetch(properties.serverSource+"/team/"+teamName+"/sprint/"+sprintId)
    .then(res => res.json())
    .then(
      (result) => onSuccess(result),
      (error) => onError(error)
    )
  }