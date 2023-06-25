// const { connect } = require('mongoose')
const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo()
const app = express()
app.use(cors())

app.use(express.json())

/*(/api/auth)-->idhr middleware function exceute hoga ,(./ routes/auth)--> idhr middleware function hy */
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


 