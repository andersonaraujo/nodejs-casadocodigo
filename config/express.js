var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Add middlewares
    app.use(express.static('./app/public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    app.use(function (request, response, next) {
        response.status(404).render('erros/404');
    });

    app.use(function (error, request, response, next) {
        response.status(500).render('erros/500', {error: error});
    });

    return app;
};