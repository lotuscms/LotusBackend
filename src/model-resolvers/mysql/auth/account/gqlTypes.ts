import { InputType, Field } from 'type-graphql';

@InputType()
export class AccountCreateArgs {
    @Field() email: string;
    @Field() password: string;
    @Field() expansion?: number;
}

@InputType()
export class AccountPasswordChangeArgs {
    @Field() email: string;
    @Field() password: string;
    @Field() newPassword: string;
}
