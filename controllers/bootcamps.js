// @desc    Fetch all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const listBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' })
  next
}

// @desc    Fetch single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` })
  next
}

// @desc    Create a bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' })
  next
}

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
const updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` })
  next
}

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
const deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
  next
}

module.exports = {
  listBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
}
