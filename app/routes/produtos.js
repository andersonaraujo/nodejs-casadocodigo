module.exports = function (app) {

    app.get('/produtos', function (request, response) {
        app.infra.produtosBanco.lista(app, function (err, result) {
            response.render('produtos/lista', {'lista': result});
        });
    });

    app.get('/', function (request, response) {
        response.send('<html><body><h1>Home da Casa do Codigo</h1></body></html>');
    });

};