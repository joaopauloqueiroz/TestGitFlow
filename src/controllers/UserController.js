const { sender } = require('../sender/send')
const { user } = require('../config/channels')

module.exports = {
  async store (req, res) {
    const { name, email } = req.body;
    const data = JSON.stringify({ name, email })
    sender(data, user.key)
    return res.json({ status: true })
  }
}