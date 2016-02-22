var mysql = require('mysql');

function createDbConnection() {
    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'casadocodigo',
            password: 'casadocodigo',
            database: 'casadocodigo_nodejs_test'
        });

    } else if (process.env.NODE_ENV == 'production') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'casadocodigo',
            password: 'casadocodigo',
            database: 'casadocodigo_nodejs_prd'
        });

    } else {
        return mysql.createConnection({
            host: 'localhost',
            user: 'casadocodigo',
            password: 'casadocodigo',
            database: 'casadocodigo_nodejs'
        });
    }

}

module.exports = function () {
    return createDbConnection;
};
