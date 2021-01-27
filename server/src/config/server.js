const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.unsubscribe(bodyParser.urlencoded({extended: true}))
app.unsubscribe(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Serviro Iniciado com sucesso. Show!')
})


app.listen('80', (req, res) => {
    console.log('Servidor Iniciado!')
})

module.exports = app