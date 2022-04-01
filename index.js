const express = require('express');
const app = express();
const port = process.env.PORT || 3535;
require('dotenv').config()
const verify = require('./src/services/verificacaoApis')
const minute = 100000;
const verification = () => {
    verify.apiClarotv()
    setInterval(() => {
        verify.apiClarotv().catch(erro => console.log(erro))
       // verify.apiClaroGerencialIntegracao().catch(erro => console.log(erro))
       // verify.apiClaroGerencial().catch(erro => console.log(erro.response.data))       
    }, minute);
}
const hs = new Date().getHours()
const mts = String(new Date().getMinutes()).padStart(2, '0')
const sec = String(new Date().getSeconds()).padStart(2, '0')
const horario_atual = `${hs}:${mts}:${sec}`
console.log(horario_atual)
//verification()


app.listen(port, () => console.log("server it`s running in the port "+port))
