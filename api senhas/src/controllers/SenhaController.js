//aqui se faz todo o controle da api pra que não fique tudo junto
//num arquivo so

const senhaService = require('../services/SenhaService');

module.exports = {
    geral: async (req, res) => {
        let json = {error:'', result:[]};

        let senhas = await senhaService.geral();

        for(let i in senhas){
            json.result.push({
                codigo: senhas[i].codigo,
                descricao: senhas[i].modelo
            })
        }

        res.json(json);
    }
}