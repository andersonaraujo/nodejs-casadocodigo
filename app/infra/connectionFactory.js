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
        var urlConexao = process.env.CLEARDB_DATABASE_URL;
        var grupos = urlConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        return mysql.createConnection({
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database: grupos[4]
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
