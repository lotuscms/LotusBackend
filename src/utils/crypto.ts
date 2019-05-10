import * as crypto from 'crypto';
import { isNothing } from './misc';

export const jwtSecret = 'L0tu$Cm$_$3Cr3t';

export function encryptPassword(username: string, password: string): string {
    return crypto
        .createHash('sha1')
        .update(`${username.toUpperCase()}:${password.toUpperCase()}`)
        .digest('hex')
        .toUpperCase();
}

export function hashSha1(email: string, password: string) {
    return crypto
        .createHash('sha1')
        .update(`${email.toUpperCase()}:${password}`)
        .digest('hex')
        .toUpperCase();
}

interface IHashedPassword {
    salt: string;
    hashedPassword: string;
}

export function hashPassword(password: string, salt?: string): IHashedPassword {
    if (isNothing(salt)) {
        salt = crypto.randomBytes(16).toString('base64');
    }
    const hashedPassword = crypto
        .createHash('sha256')
        .update(password + salt)
        .digest('hex');

    return { salt, hashedPassword };
}

export function matchHashedPassword(passwordHash: string, salt: string, password: string): boolean {
    const { hashedPassword } = hashPassword(password, salt);
    return passwordHash === hashedPassword;
}
