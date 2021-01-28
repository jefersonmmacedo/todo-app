const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const Cors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(Cors)

server.get('/', (req, res) => {
    res.send('Servidor Iniciado com sucesso. Show!')
})


server.listen('8080', (req, res) => {
    console.log('Servidor Iniciado!')
})

module.exports = server