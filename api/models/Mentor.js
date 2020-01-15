const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MentorSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  qualification: {
    type: String
  },
  taskId: {
    type: Schema.ObjectId,
    ref: 'tasks'
  }

})

module.exports = Mentor = mongoose.model("mentors", MentorSchema)