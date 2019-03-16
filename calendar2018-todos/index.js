const express = require('express')
const fs = require('fs');


const port = 8000

const app = express()

const jsonMiddleware = express.json()
app.use(jsonMiddleware)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.use(
  '/client',
  express.static(__dirname + '/public')
)

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

app.get('/movies', (req, res) =>{

let rawdata = fs.readFileSync(__dirname + '/json/file.json');  
let json = JSON.parse(rawdata); 

// return res.send(json)


  if(req.accepts('JSON')){
    res
    .header('content-type : application/json')
    .json(json)
  }else{
    res.sendStatus(406)
  }
  

})


// TODO WRITE JSON FILE 
app.post('/movies', (req, res) => {
  fs.writeFile(__dirname + '/json/file.json', JSON.stringify(req.body), 'utf8', ()=>{
    return res.send("success")
  })
  return 'res'
})

// TODO DELETE ELEMENT IN JSON FILE 
app.delete('/movies', (req, res) => {
  fs.writeFile(__dirname + '/json/file.json', JSON.stringify(req.body), 'utf8', ()=>{
    return res.send("success")
  })
  return 'res'
})

// TODO UPDATE ELEMENT IN JSON FILE 
app.put('/movies', (req, res) => {
  fs.writeFile(__dirname + '/json/file.json', JSON.stringify(req.body), 'utf8', ()=>{
    return res.send("success")
  })
  return res.send('res')

})