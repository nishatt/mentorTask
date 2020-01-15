const MentorModel = require('../models/Mentor')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
module.exports = {

  async saveMentor(reqData) {
    const mentor = new MentorModel({
      name: reqData.name,
      qualification: reqData.qualification,
    })
    return await mentor.save()
  },
  async updateMentor(reqData, mentorId) {
    console.log(reqData, mentorId)
    let mentor = await MentorModel.findById(mentorId)
    console.log(mentor)
    if (!mentor) {
      throw new Error("mentor doesn't exists")
    }
    mentor.name = reqData.name
    mentor.qualification = reqData.qualification
    return await mentor.save()
  },
  async getMentors(reqData) {
    return await MentorModel.find()
  },
  async deleteMentor(reqData) {
    console.log("SDs", reqData)
    return await MentorModel.remove({ _id: reqData.mentorId })

  },

}