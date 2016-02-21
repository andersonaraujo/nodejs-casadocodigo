var dbConnection = require('../infra/dbConnection');

module.exports = function (app) {

    app.get('/produtos', function (request, response) {
        var connection = dbConnection();

        connection.query('select * from livros', function (err, result) {
            response.render('produtos/lista', {'lista': result});
            //response.send(result);
        });

        connection.end();
    });

    app.get('/', function (request, response) {
        response.send('<html><body><h1>Home da Casa do Codigo</h1></body></html>');
    });

};