import "reflect-metadata";

import path from 'path'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { ClientResolver } from './resolvers/clients-resolver'

async function main() {
    const schema = await buildSchema({
        resolvers: [
            ClientResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({
        schema
    })

    const { url } = await server.listen()
    console.log(`server running on ${url}`);
    
}   

main()