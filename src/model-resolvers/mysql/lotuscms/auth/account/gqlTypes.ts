import { Field, ArgsType } from 'type-graphql';

@ArgsType()
export class AccountRegisterArgs {
    @Field() email: string;
    @Field() username: string;
    @Field() password: string;
}
