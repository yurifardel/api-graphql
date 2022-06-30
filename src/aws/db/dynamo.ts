import * as AWS from 'aws-sdk'
import * as dotenv from 'dotenv'

dotenv.config()

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

export const dynamoClient = new AWS.DynamoDB.DocumentClient()
