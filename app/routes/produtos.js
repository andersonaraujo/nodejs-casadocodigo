module.exports = function (app) {

    app.get('/produtos', function (request, response) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'casadocodigo',
            password: 'casadocodigo',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from livros', function (err, result) {
            response.send(result);
        });


        connection.end();

        //response.render('produtos/lista');
    });

    app.get('/', function (request, response) {
        response.send('<html><body><h1>Home da Casa do Codigo</h1></body></html>');
    });

};