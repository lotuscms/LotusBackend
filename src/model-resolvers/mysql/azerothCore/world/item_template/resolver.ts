import { Resolver, Query, Arg } from 'type-graphql';
import { ItemTemplate } from './model';
import { getItemTemplateByEntry } from './ops';

@Resolver(of => ItemTemplate)
export class ItemTemplateResolver {
    @Query(returns => ItemTemplate)
    itemTemplateByEntry(@Arg('entry') entry: number): Promise<ItemTemplate> {
        return getItemTemplateByEntry(entry);
    }
}
