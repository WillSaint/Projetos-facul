const db = require ('../db');

module.exports = {

    geral: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM senhas', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }

};