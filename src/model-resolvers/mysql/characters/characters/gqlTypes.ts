import { Field, ArgsType } from 'type-graphql';
import { AtLogin, Races } from './modelTypes';

@ArgsType()
export class AtLoginArgs {
    @Field({ nullable: true }) guid?: number;
    @Field({ nullable: true }) name?: string;
    @Field(type => AtLogin) flag: AtLogin;
}

@ArgsType()
export class UpdateCharacterRaceByNameArgs {
    @Field() name: string;
    @Field(type => Races) race: Races;
}
