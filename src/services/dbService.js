const mongoose = require('mongoose')
const { DATABASE } = require('../configs/dbConfig')

mongoose.connect(DATABASE, {}).catch((err) => console.log(err.message))
