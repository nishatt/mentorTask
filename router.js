const express = require('express')
const route = express.Router()
const mentorController = require('./api/controller/mentorController')
const taskController = require('./api/controller/taskController')

route.post('/mentor', mentorController.saveMentor)
route.get('/mentor', mentorController.getMentors)
route.delete('/mentor/:mentorId', mentorController.deleteMentor)
route.put('/mentor/:mentorId', mentorController.updateMentor)
route.post('/mentor/task/assign', mentorController.mentorTaskAssign)


route.post('/task', taskController.saveTask)
route.get('/task', taskController.getTasks)

module.exports = route