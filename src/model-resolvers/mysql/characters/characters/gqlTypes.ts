import { Field, ArgsType } from 'type-graphql';
import { AtLogin } from './modelTypes';

@ArgsType()
export class AtLoginArgs {
    @Field({ nullable: true }) guid?: number;
    @Field({ nullable: true }) name?: string;
    @Field(type => AtLogin) flag: AtLogin;
}
