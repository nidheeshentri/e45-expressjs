const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World! - get request first ')
})

app.put('/login', (req, res) => {
  console.log(test)
  console.log(req.body.password)
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})