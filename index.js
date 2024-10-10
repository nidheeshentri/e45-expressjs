const express = require('express')
const app = express()
const port = 4000

let tasks = []

app.use(express.json())

const middleware1 = (req, res, next)=>{
  console.log("Reached1")
  next()
}

app.use(middleware1)

app.use((req, res, next)=>{
  console.log("Reached2")
  next()
})

// frontend -> routes -> controller -> response (frontend)

app.get('/', (req, res) => {
  res.send(tasks)
})

app.patch('/', (req, res) => {
  tasks.push(req.body.task)
  res.send("Added successfully")
})

app.get('/:idx', (req, res) => {
  let idx = req.params.idx
  tasks.splice(idx, 1)
  res.send("deleted successfully")
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})