const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }

})

module.exports = Task = mongoose.model("tasks", TaskSchema)