var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function () {

    it('#Listagem json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200, done);
    });

    it('#Listagem html', function (done) {
        request.get('/produtos')
            .set('Accept', 'text/html')
            .expect('Content-type', /html/)
            .expect(200, done);
    });

    it('#cadastro de novo produto com titulo invalido', function (done) {
        request.post('/produtos')
            .type('json')
            .send({
                titulo: '',
                preco: '11',
                descricao: 'Novo livro'
            })
            .expect(400, done);
    });

    it('#cadastro de novo produto com preco invalido', function (done) {
        request.post('/produtos')
            .type('json')
            .send({
                titulo: 'titulo',
                preco: 'abc',
                descricao: 'Novo livro'
            })
            .expect(400, done);
    });

    it('#cadastro de novo produto com dados validos - json', function (done) {
        request.post('/produtos')
            .type('json')
            .send({
                titulo: 'titulo',
                preco: '11',
                descricao: 'Novo livro'
            })
            .expect(302, done);
    });

    it('#cadastro de novo produto com dados validos - html', function (done) {
        request.post('/produtos')
            .type('form')
            .send({
                titulo: 'titulo',
                preco: '11',
                descricao: 'Novo livro'
            })
            .expect(302, done);
    });

});