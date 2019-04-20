import { getRepository, DeleteResult } from 'typeorm';
import { Account } from './model';
import { encryptPassword } from '../../../../utils/crypto';
import { connections } from '../../../../config';

const connectionName = connections.auth;

export function getAccountByUsername(username: string): Promise<Account> {
    return getRepository(Account, connectionName).findOne({ where: { username } });
}

export function createAccount(username: string, email: string, password: string): Promise<Account> {
    const account = new Account();
    account.username = username;
    account.email = email.toUpperCase();
    account.regMail = email.toUpperCase();
    account.passwordHash = encryptPassword(username, password);

    return getRepository(Account, connectionName).save(account);
}

export function deleteAccountById(id: number): Promise<DeleteResult> {
    return getRepository(Account, connectionName).delete(id);
}

export function getAccountById(id: number): Promise<Account> {
    return getRepository(Account, connectionName).findOne(id);
}

export async function updateAccountPassword(
    username: string,
    oldPassword: string,
    newPassword: string
): Promise<Account> {
    const account = await getAccountByUsername(username);
    const encryptedPassword = encryptPassword(username, oldPassword);

    if (account.passwordHash != encryptedPassword) {
        throw new Error('Incorrect email or password, please try again!');
    }

    account.passwordHash = encryptPassword(username, newPassword);

    return getRepository(Account, connectionName).save(account);
}
