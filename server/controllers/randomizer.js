const mongoose = require('mongoose')
const Quote = require('../models/RandomizeModel')

const generateQuote = async (req,res) => {
   try {
      const quoteArray = await Quote.find({})
      let randomNum = Math.floor(Math.random() * (quoteArray.length - 1))
      res.status(200).json(quoteArray[randomNum])
   } catch (error) {
      res.status(500).send({Message: error.message})
   }
}

module.exports = {
    generateQuote
}