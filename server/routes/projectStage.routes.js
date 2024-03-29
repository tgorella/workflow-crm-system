const express = require('express')
const auth = require('../middleware/auth.middleware')
const ProjectStage = require('../models/ProjectStage').default
const ProjectStep = require('../models/ProjectStep').default
const Project = require('../models/Project').default
const router = express.Router({mergeParams: true})


router.route('/')
.get(auth, async (req, res) => {
  try {
    const list = await ProjectStage.find({userId: req.user._id})

    res.status(200).send(list)
  } catch (error) {
    res
        .status(500)
        .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
})
.post(auth, async (req, res) => {
  try {
    const newProjectStage = await ProjectStage.create({
      ...req.body,
      userId: req.user._id
    }) 
    const project = await Project.findById(newProjectStage.projectId)
    project.stages.push(newProjectStage._id)
    project.save()

    res.status(201).send(newProjectStage)
  } catch (error) {
    res
        .status(500)
        .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
})

router
.route('/:stageId')
.delete(auth, async (req, res) => {
  try {
    const {stageId} = req.params
    const removedProjectStage = await ProjectStage.findById(stageId)
    if (removedProjectStage.userId.toString() === req.user._id) {
      const project = await Project.findById(removedProjectStage.projectId) 
      await ProjectStep.deleteMany({stageId: stageId})
      await ProjectStage.deleteOne({_id: stageId})
      project.stages = project.stages.filter((stage) => stage._id !== removedProjectStage._id)
      project.save()
      return res.send({stage: removedProjectStage._id, project:removedProjectStage.projectId})
    }
  } catch (error) {
    res
        .status(500)
        .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
})
.patch(auth, async (req, res) => {
  try {
     const {stageId} = req.params
  const stage = await ProjectStage.findById(stageId)
  if (stage.userId.toString() === req.user._id) {
    for (let key in req.body) {
      stage[key] = req.body[key]
    }
    await stage.save()
    await stage.populate({
      path: 'steps'
    })
    return res.status(200).send(stage)
  } else {
    res.status(401).json({message:'Unauthorized'})
  }
  } catch (error) {
    res
    .status(500)
    .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
}

})

module.exports = router