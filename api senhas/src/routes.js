//Este arquivo vai conter todas as rotas da api
const express = require('express');

const router = express.Router();

const SenhaController = require('./controllers/SenhaController');

module.exports = router;

router.get('/geral', SenhaController.geral);