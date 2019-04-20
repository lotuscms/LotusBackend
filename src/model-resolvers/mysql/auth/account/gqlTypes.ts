import { InputType, Field } from 'type-graphql';

@InputType()
export class AccountCreateArgs {
    @Field() username: string;
    @Field() email: string;
    @Field() password: string;
    @Field() expansion?: number;
}

@InputType()
export class AccountPasswordChangeArgs {
    @Field() username: string;
    @Field() password: string;
    @Field() newPassword: string;
}
