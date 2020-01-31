const { sender } = require('../send')

module.exports = {
  async store (req, res) {
    const { name, email } = req.body;
    sender(JSON.stringify({ name, email }), "userCreate")
    return res.json({ status: true })
  }
}