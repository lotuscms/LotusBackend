import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql';
import { Characters } from './model';
import { getCharactersByAccountId } from './ops';
import { Account } from '../../auth/account/model';
import { getAccountById } from '../../auth/account/ops';

@Resolver(of => Characters)
export class CharactersResolver {
    @Query(returns => [Characters])
    async charactersByAccountId(@Arg('id') id: number): Promise<Characters[]> {
        return getCharactersByAccountId(id);
    }

    @FieldResolver(returns => Account)
    async account(@Root() characters: Characters) {
        return await getAccountById(characters.accountId);
    }
}
