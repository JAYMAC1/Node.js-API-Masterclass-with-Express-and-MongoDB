// @desc    Fetch all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Private
const getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' })
  next
}

module.exports = {
  getBootcamps,
}
