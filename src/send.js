const amqp = require('amqplib/callback_api')

const sender = (msg, user) => {
  amqp.connect('amqp://localhost', (err, connection) => {
  if(err) {
    console.log(err)
  }

  connection.createChannel((err, channel) => {
    const queue = user; 
    channel.assertQueue(queue, {
      durable: false
    })

    channel.sendToQueue(queue, Buffer.from(msg))
    console.log(`[x] message sender ${msg}`)
  })

  })
}

module.exports = { sender }