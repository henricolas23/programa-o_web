const mysql = require('mysql2');

//parametros de configuração do banco (credencias)
const db = mysql.createConnection({
    host:  'localhost', 
    user: 'root',
    password: 'catolica',
    database: 'userdb_henrique2',
    port:'3307'

});

//estabelecer a conexão
db.connect(err =>{
    if(err) throw err;
    console.log('conectado ao banco de dados');
});

//exportar o modulo de conexão
module.exports = db