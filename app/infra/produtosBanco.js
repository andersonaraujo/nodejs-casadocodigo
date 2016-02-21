module.exports = function () {
    this.lista = function (app, callback) {
        var connection = app.infra.connectionFactory();
        connection.query('select * from livros', callback);
        connection.end();
    };
    return this;
};
