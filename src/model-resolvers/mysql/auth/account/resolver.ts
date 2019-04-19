import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Account } from './model';
import { getAccountByEmail, createAccount, deleteAccount, updateAccountPassword } from './ops';
import { AccountCreateArgs, AccountPasswordChangeArgs } from './gqlTypes';
import { createBnetAccount, deleteBnetAccountById } from '../battlenet_accounts/ops';

@Resolver(of => Account)
export class AccountResolver {
    @Query(returns => Account)
    accountGetByEmail(@Arg('email') email: string) {
        return getAccountByEmail(email, ['battleNetAccount']);
    }

    @Mutation(returns => Account)
    async accountRegister(@Arg('args') args: AccountCreateArgs): Promise<Account> {
        const { email, password, expansion } = args;
        const bnetAccount = await createBnetAccount(email, password);

        return createAccount(email, password, expansion, bnetAccount);
    }

    @Mutation(returns => Boolean)
    async accountDelete(@Arg('id') id: number): Promise<Boolean> {
        const acctDelete = await deleteAccount(id);
        const bnetAcctDelete = await deleteBnetAccountById(id);

        return bnetAcctDelete.affected > 0 && acctDelete.affected > 0;
    }

    @Mutation(returns => Boolean)
    async accountPasswordChange(@Arg('args') args: AccountPasswordChangeArgs): Promise<Boolean> {
        return updateAccountPassword(args.email, args.password, args.newPassword);
    }
}
