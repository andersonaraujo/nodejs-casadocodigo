var mysql = require('mysql');

function createDbConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'casadocodigo',
        password: 'casadocodigo',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = function () {
    return createDbConnection;
};
