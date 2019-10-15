
const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors());
const port = 9696

var crawlingService = require('./crawling-service')

app.get('/team/:name/sprint/:id',async (req, res) => {
  let teamName = req.params.name;
  let sprintId = req.params.id;
  const returnObject = await crawlingService.findData(teamName, sprintId);
  res.send(returnObject);
})

app.listen(port, () => console.log(`crawling server listening on port ${port}!`))




























