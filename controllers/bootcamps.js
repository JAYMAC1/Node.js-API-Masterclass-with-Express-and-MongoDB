// @desc    Fetch all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const listBootcamps = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'List all bootcamps', hello: req.hello })
}

// @desc    Fetch single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` })
}

// @desc    Create a bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const createBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' })
}

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
const updateBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` })
}

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
const deleteBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
}

module.exports = {
  listBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
}
