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
  taskIds: [{
    type: mongoose.Types.ObjectId,
    ref: 'Task'
  }]
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Mentor", MentorSchema)