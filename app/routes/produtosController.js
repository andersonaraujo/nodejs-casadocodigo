module.exports = function (app) {

    app.get('/produtos', function (request, response, next) {
        var produtosDAO = new app.infra.ProdutosDAO(app.infra.connectionFactory());
        produtosDAO.lista(function (err, result) {
            if (err) {
                return next(err);
            }
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

    app.post('/produtos', function (request, response, next) {
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
            if (err) {
                return next(err);
            }
            response.redirect('/produtos');
        });
    });

};