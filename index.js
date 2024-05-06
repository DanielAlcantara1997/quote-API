const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const randomizerRoute = require('./server/routes/randomizer')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api", randomizerRoute)

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to Database")
    app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`))
})
.catch(err => console.log(err))
 