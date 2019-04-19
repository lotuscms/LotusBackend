import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { BnetAccounts } from './model';
import { getBnetAccountByEmail, deleteBnetAccountById } from './ops';

@Resolver(of => BnetAccounts)
export class BnetAccountsResolver {
    @Query(returns => BnetAccounts)
    bnetAccountsGetByEmail(@Arg('email') email: string): Promise<BnetAccounts> {
        return getBnetAccountByEmail(email);
    }

    @Mutation(returns => Boolean)
    async bnetAccountsDeleteById(@Arg('id') id: number): Promise<Boolean> {
        const result = await deleteBnetAccountById(id);

        return result.affected > 0;
    }
}
