const amqp = require('amqplib/callback_api')

const sender = (msg, queue) => {
  amqp.connect('amqp://localhost', (err, connection) => {
  if(err) throw err

  connection.createChannel((err, channel) => {
    channel.assertQueue(queue, {
      durable: false
    })
    
    channel.sendToQueue(queue, Buffer.from(msg))
      console.log(`[x] Mensagem enviada para ${queue}`)
    })
  })
}

module.exports = { sender }