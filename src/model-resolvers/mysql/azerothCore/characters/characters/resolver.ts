import { Resolver, Query, Arg, FieldResolver, Root, Mutation, Args } from 'type-graphql';
import { Characters } from './model';
import {
    getCharactersByAccountId,
    setAtLoginFlag,
    getAllCharacters,
    getCharacterByName,
    getCharacterByGuid,
    updateCharacterRaceByName
} from './ops';
import { GameAccount } from '../../auth/account/model';
import { getAccountById } from '../../auth/account/ops';
import { AtLoginArgs, UpdateCharacterRaceByNameArgs } from './gqlTypes';

@Resolver(of => Characters)
export class CharactersResolver {
    @Query(returns => [Characters])
    async charactersGetAll(): Promise<Characters[]> {
        return getAllCharacters();
    }
    @Query(returns => [Characters])
    async charactersByAccountId(@Arg('id') id: number): Promise<Characters[]> {
        return getCharactersByAccountId(id);
    }

    @Query(returns => Characters)
    async charactersGetByName(@Arg('name') name: string): Promise<Characters> {
        return getCharacterByName(name);
    }

    @Query(returns => Characters)
    async charactersGetByGuid(@Arg('guid') guid: number): Promise<Characters> {
        return getCharacterByGuid(guid);
    }

    @Mutation(returns => Characters)
    async charactersSetAtLoginFlag(@Args() { guid, name, flag }: AtLoginArgs): Promise<Characters> {
        return setAtLoginFlag(flag, guid, name);
    }

    @Mutation(returns => Characters)
    async charactersUpdateRaceByName(@Args() { name, race }: UpdateCharacterRaceByNameArgs): Promise<Characters> {
        return updateCharacterRaceByName(name, race);
    }

    @FieldResolver(returns => GameAccount)
    async account(@Root() characters: Characters) {
        return await getAccountById(characters.accountId);
    }
}
