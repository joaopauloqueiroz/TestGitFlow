const amqp = require('amqplib/callback_api')
const { sender } = require('./send')

const received = () => { 
  amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    const queue = 'userCreate';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function(msg) {
    console.log(" [x] Received %s", msg.content.toString());
    }, {
        noAck: true
    });
    console.log('aa')
    sender("acabei de salvar o usuario", 'createdUser');
});

//

//
connection.createChannel(function(error1, channel) {
  if (error1) {
    throw error1;
  }

  const queue = 'createdUser';

  channel.assertQueue(queue, {
    durable: false
  });

  console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
  channel.consume(queue, function(msg) {
  console.log(" [x] Received %s", msg.content.toString());
  }, {
      noAck: true
  });
  });
});
}

received()
module.exports = { received }