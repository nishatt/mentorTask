const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./router')
const connect = require('./config')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

async function run() {
  await mongoose.connect(connect.dbUrl, { useNewUrlParser: true })
  console.log("connected")

  app.use('/', route)

  app.listen(3030, () => {
    console.log("app is listening")
  })

}

run().catch(error => console.error(error.stack));