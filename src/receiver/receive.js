const amqp = require('amqplib/callback_api')
const items = require('../config/channels')
const Receive = require('./receive.class')

const received = () => { 
  amqp.connect('amqp://localhost', function(err, connection) {
    if (err)  throw err
    Object.entries(items).forEach(([key, value]) => {
      new Receive(connection, value)
    })
  });
}

received()
module.exports = { received }