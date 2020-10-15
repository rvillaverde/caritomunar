const express = require('express')
const router = express.Router()

const ProjectService = require('../services/projectService')

router.get('/', async(req, res) => {
  const { query } = req
  const projects = Object.keys(query).length
    ? await ProjectService.findProject(query)
    : await ProjectService.getProjects()
  res.status(200).send(projects)
})

router.get('/:id', async(req, res) => {
  const { id } = req.params
  const project = await ProjectService.getProject(id)
  res.status(200).send(project)
})

router.post('/', async(req, res) => {
  const {
    body: project,
    // body: { project },
    files: { thumbnail } = {}
  } = req
  const savedProject = await ProjectService.createProject(project, thumbnail)
  res.status(200).send(savedProject)
  // res.sendStatus(200)
})

router.put('/:id', async(req, res) => {
  console.log('update project', req.files)
  const {
    body: project,
    files
    // files: { cover, images } = {}
  } = req
  const { cover, images } = files || {}
  const updated = await ProjectService.updateProject(project, cover, images)
  res.status(200).send({ updated })
})

router.delete('/', async(req, res) => {
  const { id } = req.body
  const deleted = await ProjectService.deleteProject(id)
  res.status(200).send({ deleted })
})

module.exports = router