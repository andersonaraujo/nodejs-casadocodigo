module.exports = function (app) {

    app.get('/produtos', function (request, response) {
        var produtosDAO = new app.infra.ProdutosDAO(app.infra.connectionFactory());
        produtosDAO.lista(function (err, result) {
            response.format({
                html: function () {
                    response.render('produtos/lista', {'lista': result});
                },
                json: function () {
                    response.json(result);
                }
            });
        });
    });

    app.get('/produtos/form', function (request, response) {
        response.render('produtos/form', {produto: {}, validationErrors: {}});
    });

    app.post('/produtos', function (request, response) {
        var produto = request.body;

        request.assert('titulo', 'Titulo é obrigatório').notEmpty();
        request.assert('preco', 'Formato inválido').isFloat();

        var errors = request.validationErrors();
        if (errors) {
            response.format({
                html: function () {
                    response.status(400).render('produtos/form', {produto: produto, validationErrors: errors});
                },
                json: function () {
                    response.status(400).json(errors);
                }
            });
            return;
        }

        var produtosDAO = new app.infra.ProdutosDAO(app.infra.connectionFactory());
        produtosDAO.salva(produto, function (err, result) {
            response.redirect('/produtos');
        });
    });

    app.get('/', function (request, response) {
        response.send('<html><body><h1>Home da Casa do Codigo</h1></body></html>');
    });

};