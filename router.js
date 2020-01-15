const express = require('express')
const route = express.Router()
const mentorController = require('./api/controller/mentorController')
const taskController = require('./api/controller/taskController')

route.post('/mentor', mentorController.saveMentor)
route.get('/mentor', mentorController.getMentors)
route.delete('/mentor/:mentorId', mentorController.deleteMentor)
route.post('/mentor/:mentorId', mentorController.updateMentor)



module.exports = route