var http = require('http');

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(config, function (response) {
    console.log(response.statusCode);
    response.on('data', function (body) {
        console.log('' + body);
    });
});

var produto = {
    titulo: 'Test json post',
    descricao: 'Test json post',
    preco: 11.5
};

client.end(JSON.stringify(produto));