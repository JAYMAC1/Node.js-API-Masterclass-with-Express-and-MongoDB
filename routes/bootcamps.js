const express = require('express') // import express
const router = express.Router() // initalise router
const { getBootcamps } = require('../controllers/bootcamps')

router.get('/', getBootcamps)

router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` })
})

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamps' })
})

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
})

module.exports = router
