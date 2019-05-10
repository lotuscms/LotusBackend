import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Session {
    @Field()
    token: string;
}
