const express = require('express')
const { PORT } = require('./configs/generalConfig')
const postRouter = require('./routes/postRouter')
const app = express()

//  db
require('./services/dbService')

// pasers
app.use(express.json())

//  routes
app.use('/', postRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}...`)
})
