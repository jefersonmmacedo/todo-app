const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Cors = require('./cors')

app.unsubscribe(bodyParser.urlencoded({extended: true}))
app.unsubscribe(bodyParser.json())
app.use(Cors)

app.get('/', (req, res) => {
    res.send('Serviro Iniciado com sucesso. Show!')
})


app.listen('80', (req, res) => {
    console.log('Servidor Iniciado!')
})

module.exports = app