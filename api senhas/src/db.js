const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.NAME,
    port: process.env.PORT,
    //connectionTimeout: 60000,
});

connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao Banco de dados: ${process.env.DB_NAME}`)
    console.log();
})

module.exports = connection;