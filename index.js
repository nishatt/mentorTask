const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./router')
const config = require('./config')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

async function run() {
  let url = `mongodb://localhost:27017/${config.DB_NAME}`
  await mongoose.connect(url, { useNewUrlParser: true })
  console.log("connected")

  app.use('/', route)

  app.listen(config.PORT, () => {
    console.log(`app is listening ${config.PORT}`)
  })

}

run().catch(error => console.error(error.stack));