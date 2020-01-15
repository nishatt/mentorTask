const MentorModel = require('../models/Mentor')
module.exports = {

  async saveMentor(reqData) {
    const mentor = new MentorModel({
      name: reqData.name,
      qualification: reqData.qualification,
    })
    return await mentor.save()
  },
  async updateMentor(reqData, mentorId) {
    return await MentorModel.findOneAndUpdate({ _id: mentorId }, { $set: reqData }, { new: true })
  },
  async getMentors() {
    return await MentorModel.find()
  },
  async deleteMentor(reqData) {
    return await MentorModel.findByIdAndRemove({ _id: reqData.mentorId })
  },
  async mentorTaskAssign(reqData) {
    let taskCount = await MentorModel.find({ taskIds: { $in: reqData.taskIds } }).count()
    if (taskCount > 0) {
      throw new Error("task is already assigned")
    }
    return await MentorModel.findOneAndUpdate(
      { _id: reqData.mentorId },
      { $push: { taskIds: { $each: reqData.taskIds } } }
    )
  },

}