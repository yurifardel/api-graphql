import * as dotenv from 'dotenv'
import { dynamoClient } from '../db/dynamo'
dotenv.config()

const TABLE_NAME = 'advocacia-api'

export const getData = async () => {
    const params = {
        TableName: TABLE_NAME
    }

    const data = await dynamoClient.scan(params).promise()
    return data 
}


export const getItemById = async (id: string) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.get(params).promise()
}


export const addOrUpData = async (data: any) => {
    const params = {
        TableName: TABLE_NAME,
        Item: data
    }
    return await dynamoClient.put(params).promise()
}
