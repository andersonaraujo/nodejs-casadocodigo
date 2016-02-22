module.exports = function (app) {

    app.get('/produtos', function (request, response) {
        var produtosDAO = new app.infra.ProdutosDAO(app.infra.connectionFactory());
        produtosDAO.lista(function (err, result) {
            response.render('produtos/lista', {'lista': result});
        });
    });

    app.get('/produtos/form', function (request, response) {
        response.render('produtos/form');
    });

    app.post('/produtos', function (request, response) {
        var produto = request.body;
        var produtosDAO = new app.infra.ProdutosDAO(app.infra.connectionFactory());
        produtosDAO.salva(produto, function (err, result) {
            response.redirect('/produtos');
        });
    });

    app.get('/', function (request, response) {
        response.send('<html><body><h1>Home da Casa do Codigo</h1></body></html>');
    });

};