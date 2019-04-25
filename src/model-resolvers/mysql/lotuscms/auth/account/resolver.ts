import { Resolver, Query, Arg, Mutation, Args } from 'type-graphql';
import { Account } from './model';
import { getAccountByEmail, getAccountByUsername, getAllAccounts, registerAccount } from './ops';
import { AccountRegisterArgs } from 'model-resolvers/mysql/azerothCore/auth/account/gqlTypes';

@Resolver(of => Account)
export class AccountResolver {
    @Query(returns => [Account])
    accountAll(): Promise<Account[]> {
        return getAllAccounts();
    }

    @Query(returns => Account)
    accountByEmail(@Arg('email') email: string): Promise<Account> {
        return getAccountByEmail(email);
    }

    @Query(returns => Account)
    accountByUsername(@Arg('username') username: string): Promise<Account> {
        return getAccountByUsername(username);
    }

    @Mutation(returns => Account)
    accountRegister(@Args() { email, username, password }: AccountRegisterArgs): Promise<Account> {
        return registerAccount(email, username, password);
    }
}
