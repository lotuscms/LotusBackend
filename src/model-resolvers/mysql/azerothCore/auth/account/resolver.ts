import { Resolver, Query, Arg, Mutation, FieldResolver, Root, Args } from 'type-graphql';
import { GameAccount } from './model';
import { getAccountByUsername, createAccount, deleteAccountById, updateAccountPassword } from './ops';
import { AccountRegisterArgs, AccountPasswordChangeArgs } from './gqlTypes';
import { Characters } from '../../characters/characters/model';
import { getCharactersByAccountId } from '../../characters/characters/ops';

@Resolver(of => GameAccount)
export class AccountResolver {
    @Query(returns => GameAccount)
    accountGetByUsername(@Arg('username') username: string) {
        return getAccountByUsername(username);
    }

    // TODO: This should actually regsiter a website account and link the gameaccount with it
    @Mutation(returns => GameAccount)
    async accountRegister(@Args() { username, email, password }: AccountRegisterArgs): Promise<GameAccount> {
        return createAccount(username, email, password);
    }

    @Mutation(returns => Boolean)
    async accountDelete(@Arg('id') id: number): Promise<Boolean> {
        const acctDelete = await deleteAccountById(id);

        return acctDelete.affected > 0;
    }

    @Mutation(returns => GameAccount)
    async accountPasswordChange(@Args() { username, password, newPassword }: AccountPasswordChangeArgs): Promise<
        GameAccount
    > {
        return updateAccountPassword(username, password, newPassword);
    }

    @FieldResolver(returns => [Characters])
    async characters(@Root() account: GameAccount) {
        return getCharactersByAccountId(account.id);
    }
}
