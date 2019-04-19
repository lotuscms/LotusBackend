import { Resolver, Query, Arg } from 'type-graphql';
import { Characters } from './model';
import { getCharactersByAccountId } from './ops';

@Resolver(of => Characters)
export class CharactersResolver {
    // TODO: Implement calculated field for account
    @Query(returns => [Characters])
    async charactersByAccountId(@Arg('id') id: number): Promise<Characters[]> {
        return getCharactersByAccountId(id);
    }
}
