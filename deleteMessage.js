require('dotenv').config()
const SQSHelper = require('./SQSHelper')

;(async () => {
  const sqs = new SQSHelper()
  const params = {
    QueueUrl: [
      'https://sqs.us-east-1.amazonaws.com/432629911587/ch-loyalty-balance'
    ],
    ReceiptHandle:
      'AQEBwIqULRdElKkNmGADHjVWxO5fpOv9TaymaVav7PW9gd7n0oL1rw4IrPJ+eY46ItUQu9xR8nQFYgE1Itd0mkWyaOxAamMFWurOzV9PUSXZHSA1pT9FnZgklfdWK3CfnRCDsoXVfZISpOQVR9lVG2uQDW4Gs9rlf6Kj5gMbDvRZgLqA6qs2d6Uzgf6+JKzz/MJDF9HAH5qztZ8J+BESJ5jGb0hDavuGbLGCOW+Nonqlt2bUVVFX5kSs/SMyEZPhHDWsqwrldY96/CWS8PjyaHkrUB9cueeXVpnEnzp9exg2I9TQrXhclI8tcUdpU+jZVfcdDSNQk12ly5yNXlIswZ0bekzoyJt52NwPfyy3NDS6ox9CpztOxtJjH4RXPnzMK+BvDOZlv7qXhgnL38JOwEkjLg=='
  }
  console.log(await sqs.deleteMessage(params))
})()
