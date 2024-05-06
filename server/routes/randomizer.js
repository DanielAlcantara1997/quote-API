const express = require('express')
const router = express.Router()
const {
    generateQuote,
    injectQuote
} = require('../controllers/randomizer')

router.route('/randomize').get(generateQuote)
module.exports = router