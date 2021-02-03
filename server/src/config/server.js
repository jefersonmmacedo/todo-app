const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const Cors = require('./cors')
const cors = require('cors')

const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
server.use(cors(corsOptions));

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