const { Kafka } = require('../..').KafkaJS
//const { Kafka } = require('kafkajs')

async function consumerStart() {
    const kafka = new Kafka({
        brokers: ['pkc-8w6ry7.us-west-2.aws.devel.cpdev.cloud:9092'],
        ssl: true,
        sasl: {
            mechanism: 'plain',
        },
        rdKafka: {
          'enable.auto.commit': false
        }
    });

    const consumer = kafka.consumer({ groupId: 'test-group' });

    await consumer.connect();
    console.log("Connected successfully");

    await consumer.subscribe({
      topics: [
        "topic2"
      ]
    })

    var batch = 0;
    consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          topic,
          partition,
          offset: message.offset,
          key: message.key?.toString(),
          value: message.value.toString(),
        })

        if (++batch % 100 == 0) {
          await consumer.seek({
            topic,
            partition,
            offset: -2
          });
          await consumer.commitOffsets();
          batch = 0;
        }
      },
    });

    const disconnect = () => {
      process.off('SIGINT', disconnect);
      process.off('SIGTERM', disconnect);
      consumer.disconnect().then(() => {
        console.log("Disconnected successfully");
      });
    }
    process.on('SIGINT', disconnect);
    process.on('SIGTERM', disconnect);
}

consumerStart()
