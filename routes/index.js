const router = require('express').Router()

router.use('/predict', require('./predict'))

module.exports = router