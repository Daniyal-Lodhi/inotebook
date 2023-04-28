const { connect } = require('mongoose')
const connectToMongo = require('./db')
const express = require('express')
connectToMongo()
const app = express()
const port = 5000 

app.use(express.json())

/*(/api/auth)-->idhr middleware function exceute hoga ,(./ routes/auth)--> idhr middleware function hy */
app.use('/api/auth',require('./routes/auth')) 
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`INotebook app listening on port ${port}`)
})