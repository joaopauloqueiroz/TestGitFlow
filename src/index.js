const express = require('express')
const app = express()
const routes = require('./routes')
// const bodyParser = require('body-parser')
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('server is runing on port 3333')
})