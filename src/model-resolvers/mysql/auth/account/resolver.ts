import { Resolver, Query, Arg, Mutation, FieldResolver, Root, Args } from 'type-graphql';
import { Account } from './model';
import { getAccountByUsername, createAccount, deleteAccountById, updateAccountPassword } from './ops';
import { AccountRegisterArgs, AccountPasswordChangeArgs } from './gqlTypes';
import { Characters } from '../../characters/characters/model';
import { getCharactersByAccountId } from '../../characters/characters/ops';

@Resolver(of => Account)
export class AccountResolver {
    @Query(returns => Account)
    accountGetByUsername(@Arg('username') username: string) {
        return getAccountByUsername(username);
    }

    @Mutation(returns => Account)
    async accountRegister(@Args() { username, email, password }: AccountRegisterArgs): Promise<Account> {
        return createAccount(username, email, password);
    }

    @Mutation(returns => Boolean)
    async accountDelete(@Arg('id') id: number): Promise<Boolean> {
        const acctDelete = await deleteAccountById(id);

        return acctDelete.affected > 0;
    }

    @Mutation(returns => Account)
    async accountPasswordChange(@Args() { username, password, newPassword }: AccountPasswordChangeArgs): Promise<
        Account
    > {
        return updateAccountPassword(username, password, newPassword);
    }

    @FieldResolver(returns => [Characters])
    async characters(@Root() account: Account) {
        return getCharactersByAccountId(account.id);
    }
}
