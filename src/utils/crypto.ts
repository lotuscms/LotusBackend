import * as crypto from 'crypto';
import { php } from 'locutus';

export function encryptPassword(email: string, password: string): string {
    let hash = crypto
        .createHash('sha256')
        .update(email.toUpperCase())
        .digest('hex');
    let hash2 = crypto
        .createHash('sha256')
        .update(`${hash.toUpperCase()}:${password.toUpperCase()}`)
        .digest('hex');

    const upperCaseHash = hash2.toUpperCase();
    const binary = php.strings
        .hex2bin(upperCaseHash)
        .split('')
        .reverse()
        .join('');

    return php.strings.bin2hex(binary).toUpperCase();
}

export function hashSha1(email: string, password: string) {
    return crypto
        .createHash('sha1')
        .update(`${email.toUpperCase()}:${password}`)
        .digest('hex').toUpperCase();
}
