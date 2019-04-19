import { getRepository, DeleteResult, getManager } from 'typeorm';
import { Account } from './model';
import { BnetAccounts } from '../battlenet_accounts/model';
import { hashSha1, encryptPassword } from '../../../../utils/crypto';

export function saveAccount() {}

export function getAccountByEmail(email: string, relations: string[]): Promise<Account> {
    return getRepository(Account, 'auth').findOne({ where: { email }, relations });
}

// TODO: Might not need all of these fields, refactor
export function createAccount(
    email: string,
    password: string,
    expansion: number,
    bnetAccount: BnetAccounts
): Promise<Account> {
    const account = new Account();
    account.username = `${bnetAccount.id}#1`;
    account.email = email.toUpperCase();
    account.regMail = email.toUpperCase();
    account.v = '';
    account.s = '';
    account.tokenKey = '';
    account.passwordHash = hashSha1(email, password);
    account.muteReason = '';
    account.muteBy = '';
    account.os = '';
    account.battleNetAccount = bnetAccount;
    account.battleNetIndex = 1;

    return getRepository(Account, 'auth').save(account);
}

export function deleteAccount(id: number): Promise<DeleteResult> {
    return getRepository(Account, 'auth').delete(id);
}

export function getAccountById(id: number): Promise<Account> {
    return getRepository(Account, 'auth').findOne(id);
}

export async function updateAccountPassword(email: string, oldPassword: string, newPassword: string): Promise<Boolean> {
    const account = await getAccountByEmail(email, ['battleNetAccount']);
    const encryptedPassword = encryptPassword(email, oldPassword);

    if (account.battleNetAccount.passwordHash != encryptedPassword) {
        throw new Error('Incorrect email or password, please try again!');
    }

    account.battleNetAccount.passwordHash = encryptPassword(email, newPassword);
    account.passwordHash = hashSha1(email, newPassword);

    await getManager('auth').transaction(async tm => {
        await tm.save(account.battleNetAccount);
        await tm.save(account);
    });

    return true;
}
