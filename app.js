const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose
    .connect(
        'mongodb+srv://test-express:test-express@cluster0.yzgj6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
})

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body)
    res.status(201).json({ message: 'Simulation objet créé' })
    next()
})

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        { id: 'fdd', title: 'xvcvx', price: '23244' },
        { id: 'fdd', title: 'xvcvx', price: '23244' },
    ]
    res.status(200).json(stuff)
})

module.exports = app
