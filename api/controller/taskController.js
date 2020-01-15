const taskService = require('../services/taskService')

module.exports = {

  async saveTask(req, res) {
    try {
      await taskService.saveTask(req.body)
      return res.json({ status: true, message: "success" })
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  },
  async getTasks(req, res) {
    try {
      let data = await taskService.getTasks(req.body)
      return res.json({ status: true, message: "success", data: data })
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  }
}