const express = require('express') // import express
const router = express.Router() // initalise router
const {
  listBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps')

router.route('/').post(createBootcamp).get(listBootcamps)
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)

module.exports = router
