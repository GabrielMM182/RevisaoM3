const axios = require('axios');
const { getAuthParams } = require('../utils');

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/'
});

function consumeCharacters(limit=20, page=1){
  let offsetNumber = (page - 1) * limit;
  let offsetParam  = offsetNumber > 0 ? "&offset=" + offsetNumber : "";
  
  let authParams = getAuthParams();
  return instance.get('/characters' + "?" + authParams + "&limit=" + limit + offsetParam);
}

function consumeCharacter(id){
  let authParams = getAuthParams();
  return instance.get('/characters/' + id + "?" + authParams);
}

module.exports = {
  consumeCharacters,
  consumeCharacter,
}