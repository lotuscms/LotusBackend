import { Field, ArgsType } from 'type-graphql';

@ArgsType()
export class AccountRegisterArgs {
    @Field() username: string;
    @Field() email: string;
    @Field() password: string;
}

@ArgsType()
export class AccountPasswordChangeArgs {
    @Field() username: string;
    @Field() password: string;
    @Field() newPassword: string;
}
