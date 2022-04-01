const axios = require('axios');

const claroTV = axios.create({
    baseURL: 'https://django-clarotv.herokuapp.com/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token d4bdde4465d2c5c9ecc57ef5d2cc1c19b4f69125`
    }
    
  });
  claroTV.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    claroTV.onError((res) => {
      if (res.response.status === 408) {
          console.info(`Tentar novamente`, res.config)
          return axios.request(res.config)
      }
  })
  });
  const claroGerencialIntegracao = axios.create({
    baseURL: 'https://www.clarogerencial.com.br',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token f702dced57a4fa17ec1c08375be52ccf3ebce877`
    }
  });
  const claroGerencial = axios.create({
    baseURL: 'https://www.clarogerencial.com.br/api_old/clarotv',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token f702dced57a4fa17ec1c08375be52ccf3ebce877`
    }
  });

  

  module.exports = {
    claroTV,
    claroGerencialIntegracao,
    claroGerencial

  }