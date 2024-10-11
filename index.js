const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4000

async function main() {
  await mongoose.connect('mongodb+srv://nidheeshb:todo_password@maincluster.sy3el.mongodb.net/?retryWrites=true&w=majority&appName=mainCluster');
}

main()
.then(res => {
  console.log("DB connected")
})
.catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
  id: Number,
  task: String,
  item: String
});

const Task = mongoose.model('Task', TaskSchema);


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
  Task.create({item: req.body.item, task: req.body.task})
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