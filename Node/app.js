const express = require('express')
const app = express()
const fs = require('fs');



var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/json'));
app.use(express.static(__dirname + '/Script'));
app.use(bodyParser.json())

const static = express.static('./Script')
app.use('/alert', static)
// localhost:8000/alert/script.js

// middleware
app.use('/ok' ,function(req, res, next){
  res.send('url : :8000/ok')  
})

app.get('/',function(req,res){
  res.sendFile('index.html');
  
});

app.get('/json', function (req, res){
  let rawdata = fs.readFileSync(__dirname + '/json/file.json');  
  let json = JSON.parse(rawdata); 
  let json2 = JSON.stringify(rawdata);

  return res.send(json)
 

  
})


app.listen(8000, () => {  
  console.log('Example app listening on port 8000!')

})
