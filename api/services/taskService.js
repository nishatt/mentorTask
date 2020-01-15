const TaskModel = require('../models/Task')
module.exports = {

  async saveTask(reqData) {
    const task = new TaskModel({
      title: reqData.title,
      description: reqData.description,
    })
    return await task.save()
  },
  async getTasks() {
    return await TaskModel.find()
  }
}