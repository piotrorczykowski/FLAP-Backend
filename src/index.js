const express = require('express')
const { PORT } = require('./configs/generalConfig')
const postRouter = require('./routes/postRouter')
const commentRouter = require('./routes/commentRouter')
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/authRouter')
const app = express()

//  db
require('./services/dbService')

// pasers
app.use(express.json())

//  routes
app.use('/', postRouter)
app.use('/', commentRouter)
app.use('/', userRouter)
app.use('/', authRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}...`)
})
