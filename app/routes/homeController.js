module.exports = function (app) {

    app.get('/', function (request, response) {
        var produtosDAO = new app.infra.ProdutosDAO(app.infra.connectionFactory());
        produtosDAO.lista(function (err, result) {
            if (err) {
                return next(err);
            }
            response.format({
                html: function () {
                    response.render('home/index', {'lista': result});
                },
                json: function () {
                    response.json(result);
                }
            });
        });
    });

};