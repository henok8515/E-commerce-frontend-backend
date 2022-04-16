const express = require('express')
const app = express()
const dotenv = require('dotenv')
const Logger = require('./logger')
const mongoose = require('mongoose')
dotenv.config()
let users = [
    {
        id: '1',
        name: 'henok',
        password: '123',
    },
    {
        id: '2',
        name: 'selam',
        password: '1234',
    },
    {
        id: '3',
        name: 'Esrom',
        password: '12345',
    },
    {
        id: '4',
        name: 'nati',
        password: '123456',
    },
]
app.use(express.json())
app.use(Logger)
// fetching all users
app.get('/', (req, res) => {
    res.json(users)
})
// register a new user
app.post('/users/api/register', (req, res) => {
    try {
        users.push({
            id: users.length++,
            name: req.body.name,
            password: req.body.password,
        })
        res.status(200).json(`welcome ${req.body.name}`)
    } catch (error) {
        res.status(400).json('errr', error)
    }
})
// fetching a single user
app.get('/users/api/:id', (req, res) => {
    const user = users.find((u) => u.id === req.params.id)
    if (!user) res.status(404).json('no such user')
    res.status(200).json(user)
})
// updating an extisting user
app.put('/users/api/:id', (req, res) => {
    const user = users.find((u) => u.id === req.params.id)
    if (!user) res.status(404).json('no such user')
    user.name = req.body.name
    res.json(user)
})
// deleting a single user
app.delete('/users/api/:id', (req, res) => {
    const user = users.find((u) => u.id === req.params.id)
    if (!user) res.status(404).json('no such user')
    const index = users.indexOf(user)
    users.splice(index, 1)
    res.status(200).json(users)
})

const port = process.env.PORT || 3001
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('db connected')
    })
    .catch((err) => {
        console.log(err, 'error')
    })
app.listen(3001, () => {
    console.log(`port running on port ${port}`)
})
