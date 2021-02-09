const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const Cors = require('./cors')
const cors = require('cors')


server.use(cors());

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(Cors)

server.get('/', (req, res) => {
    res.send('Servidor Iniciado com sucesso. Show!')
})


server.listen('3001', (req, res) => {
    console.log('Servidor Iniciado!')
})

module.exports = server