var mysql = require('mysql');

module.exports = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'casadocodigo',
        password: 'casadocodigo',
        database: 'casadocodigo_nodejs'
    });
};