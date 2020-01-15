const mentorService = require('../services/mentorService')
const taskService = require('../services/taskService')

module.exports = {

  async saveMentor(req, res) {
    try {
      let data = await mentorService.saveMentor(req.body)
      return res.json({ status: true, message: "success" })
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  },
  async updateMentor(req, res) {
    try {
      let data = await mentorService.updateMentor(req.body, req.params.mentorId)
      return res.json({ status: true, message: "success", data: data })
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  },
  async getMentors(req, res) {
    try {
      let data = await mentorService.getMentors(req.body)
      return res.json({ status: true, message: "success", data: data })
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  },
  async deleteMentor(req, res) {
    try {
      let data = await mentorService.deleteMentor(req.params)
      return res.json({ status: true, message: "success", data: data })
    } catch (error) {
      return res.json({ status: false, error: error.message })
    }
  }

}