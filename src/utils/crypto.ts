import * as crypto from 'crypto';

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

export function hashPassword(password: string): IHashedPassword {
    const salt = crypto.randomBytes(16).toString('base64');
    const hashedPassword = crypto
        .createHash('sha256')
        .update(password + salt)
        .digest('hex');

    return { salt, hashedPassword };
}
