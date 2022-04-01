const instance = require('./api');
const enviar_email = require('./envioEmail')
var erro_api_clarotv = false;
var erro_api_gerencial_integracao = false;
var erro_api_gerencial = false;

const apiClarotv = async () => {
    try {
        const resp = await instance.claroTV.get('/tecnicos/consultar_tecnico?chave=14220797831');
        console.log(resp.status)
        if(resp.status === 200 && !erro_api_clarotv){
            console.log('Deu certo claroTV')
            console.log(erro_api_clarotv)
           // erro_api_clarotv = !erro_api_clarotv
           // enviar_email('Deu certo claroTV')
        }else if(resp.status === 200 && erro_api_clarotv){
            console.log('claroTV voltou')
            console.log(erro_api_clarotv)
            erro_api_clarotv = !erro_api_clarotv
            enviar_email('Sistema reestabelecido, pode haver intermitências')
        }
    }catch(erro){
        if(erro.response){
            console.log(erro.response.status)
            console.log('algo errado claroTV')
            erro_api_clarotv = true;
            enviar_email('Esta havendo algum problema na conexão com o servidor na api do claroTV')
        }
    }   
  };

  const apiClaroGerencialIntegracao = async () => {
      const resp = await instance.claroGerencialIntegracao.get('/integrations/visiontec/ufs/')
        if(resp.status === 200){
            console.log('Deu certo claroGerencial Integração')
            enviar_email('Deu certo claroGerencial Integração')
        }
    }
    const apiClaroGerencial = async () => {
        const resp = await instance.claroGerencial.get('/listar_reforcos_sinal/?cpf=02485598347')
          if(resp.status === 200){
              console.log('Deu certo claro Gerencial')
              enviar_email('Deu certo claro Gerencial')
          }
      }
  
  module.exports = {
      apiClarotv,
      apiClaroGerencialIntegracao,
      apiClaroGerencial    
    }