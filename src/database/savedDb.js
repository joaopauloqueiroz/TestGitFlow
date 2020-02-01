const { sender } = require('../sender/send')
const request = (data, queue) => {
  //Faz o que tem que fazer e joga em outra fila
  sender('Usuario cadastrado com sucesso', queue)
}

module.exports = { request }