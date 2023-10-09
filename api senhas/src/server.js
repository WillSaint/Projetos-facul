//aqui eu estou chamando a dependencia dotenv, para conseguir ler meu arquivo de
//configuração chamado variaveis.env
require('dotenv').config({path:'variaveis.env'});
const express = require('express');
//chamando o cors para trabalhar com recursos de outros sites e tal,
//tive problemas com cabeçalhos e resolvi assim
const cors = require('cors');

//usando o body parser para poder converter as coisas pro formato que eu quiser
const bodyparser = require('body-parser');

//aqui eu pego as rotas do arquivo routes
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyparser.urlencoded({extended: false}));
//pra eu não usar sempre o /api em toda rota que eu for fazer
server.use('/api', routes);


//só pra verificar certinho onde que ta rodando o que sksksk
server.listen(process.env.PORT, () =>{

    console.log(`Nome do banco de dados:${process.env.DB_NAME}`);
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);

});