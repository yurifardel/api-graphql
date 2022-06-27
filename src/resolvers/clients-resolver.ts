import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Client } from '../models/Client'

@Resolver()
export class ClientResolver {
    private data: Client[] = [] 

    @Query(() => [Client])
    async Client() {
        return this.data
    }

    @Mutation(() => Client)
    async createClient(
        @Arg('name') name: string,
        @Arg('email') email: string
    ) {
        const id = Math.floor(Date.now() * Math.random()).toString(36)
        console.log(id);
        
        const user = {
            id,
            name,
            email
        }

        this.data.push(user)

        return user
    }
}