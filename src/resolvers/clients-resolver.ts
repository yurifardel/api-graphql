import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { addOrUpData, getData } from '../aws/middleware/resource'
import { Client } from '../models/Client'

@Resolver()
export class ClientResolver {

    @Query(() => [Client])
    async Client() {
        return getData()
    }

    @Mutation(() => Client)
    async createClient(
        @Arg('name') name: string,
        @Arg('email') email: string
    ) {
        const id = Math.floor(Date.now() * Math.random()).toString(36)
        
        const user = {
            id,
            name,
            email
        }

        try {
          await addOrUpData(user)
            
        } catch (error) {
            console.log(error);
            
        }


        return user
    }
}