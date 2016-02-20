var express = require('express');

var app = express();

app.get('/produtos', function (request, response) {
    response.send('<html><body><h1>Listagem de Produtos</h1></body></html>');
});

app.get('/', function (request, response) {
    response.send('<html><body><h1>Home da Casa do Codigo</h1></body></html>');
});

app.listen(3000, function () {
    console.log('Servidor rodando.');
});
