const express = require('express')
const router = express.Router()

const PresentationService = require('../services/presentationService')

router.get('/', async(req, res) => {
  PresentationService.getPresentation()
    .then(presentation => {
      res.status(200).send(presentation)
    })
    .catch(err => {
      console.log('catch error', err)
      res.status(500).send({ message: err })
    })
})

router.post('/', async(req, res) => {
  const {
    body,
    files: { photo } = {}
  } = req
  PresentationService.updatePresentation(body, photo)
    .then(presentation => {
      res.status(200).send(presentation)
    })
    .catch(err => {
      console.log('catch error', err)
      res.status(500).send({ message: err })
    })
})

module.exports = router
