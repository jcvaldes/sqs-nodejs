require('dotenv').config()
const SQSHelper = require('./SQSHelper')

;(async () => {
  const sqs = new SQSHelper()
  const params = {
    QueueUrl: [
      'https://sqs.us-east-1.amazonaws.com/432629911587/ch-loyalty-balance'
    ],
    MessageBody: JSON.stringify({
      message: 'Hello AWS SQS!'
    })
  }
  console.log(await sqs.sendMessage(params))
})()
