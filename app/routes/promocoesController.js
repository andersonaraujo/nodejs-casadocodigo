module.exports = function (app) {

    app.get('/promocoes/form', function (request, response, next) {
        var produtosDAO = new app.infra.ProdutosDAO(app.infra.connectionFactory());
        produtosDAO.lista(function (err, result) {
            if (err) {
                return next(err);
            }
            response.format({
                html: function () {
                    response.render('promocoes/form', {'lista': result, validationErrors: {}});
                },
                json: function () {
                    response.json(result);
                }
            });
        });
    });

    app.post('/promocoes', function (request, response, next) {
        var promocao = request.body;
        app.get('io').emit('novaPromocao', promocao);
        response.redirect('/promocoes/form');
    });

};