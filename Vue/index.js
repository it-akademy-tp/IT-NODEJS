const express = require('express')
const app = express()
const port = 8000



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })
  
  app.use(
    '/client',
    express.static(__dirname + '/public')
  )

  app.use(express.static(__dirname + '/scripts'))
  


app.listen(port, () =>{
    console.log(`Listenning on ${port}`)
})