import { Resolver, Query, Arg, Mutation, FieldResolver, Root } from 'type-graphql';
import { Account } from './model';
import { getAccountByUsername, createAccount, deleteAccountById, updateAccountPassword } from './ops';
import { AccountCreateArgs, AccountPasswordChangeArgs } from './gqlTypes';
import { Characters } from '../../characters/characters/model';
import { getCharactersByAccountId } from '../../characters/characters/ops';

@Resolver(of => Account)
export class AccountResolver {
    @Query(returns => Account)
    accountGetByEmail(@Arg('email') username: string) {
        return getAccountByUsername(username);
    }

    @Mutation(returns => Account)
    async accountRegister(@Arg('args') args: AccountCreateArgs): Promise<Account> {
        return createAccount(args.username, args.email, args.password, args.expansion);
    }

    @Mutation(returns => Boolean)
    async accountDelete(@Arg('id') id: number): Promise<Boolean> {
        const acctDelete = await deleteAccountById(id);

        return acctDelete.affected > 0;
    }

    @Mutation(returns => Account)
    async accountPasswordChange(@Arg('args') args: AccountPasswordChangeArgs): Promise<Account> {
        return updateAccountPassword(args.username, args.password, args.newPassword);
    }

    @FieldResolver(returns => [Characters])
    async characters(@Root() account: Account) {
        return getCharactersByAccountId(account.id);
    }
}
