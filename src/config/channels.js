const { request } = require('../database/savedDb')
module.exports = {
  user: {
    key: "CREATEUSER",
    onEnd: request,
    end: "CREATEDUSER"
  }
}