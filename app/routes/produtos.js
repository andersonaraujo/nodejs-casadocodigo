module.exports = function (app) {

    app.get('/produtos', function (request, response) {
        response.render('produtos/lista');
    });

    app.get('/', function (request, response) {
        response.send('<html><body><h1>Home da Casa do Codigo</h1></body></html>');
    });

};