class Receive {
  constructor(connection, queue) {
    this.connection = connection;
    this.queue = queue
    this.generateChannel()
  }

  generateChannel () {
    this.connection.createChannel((err, channel) => {
      if (err) throw err;
      channel.assertQueue(this.queue.key, {
        durable: false
      });
      console.log(`Escutando o canal ${this.queue.key}`)
      channel.consume(this.queue.key, (msg) => {
      console.log("[x] Mensagem recebida %s", msg.content.toString());
      
      //exec function
      this.queue.onEnd(msg.content.toString(), this.queue.end)
      }, {
          noAck: true
      });
    });
  }
}

module.exports = Receive