import * as fs from 'fs';
import * as path from 'path';

const confPath = path.resolve(__dirname, '../conf.json');
console.info('Reading config file : %s', confPath);

const confData = fs.readFileSync(confPath, 'utf-8');

export const config: ConfigFormat = JSON.parse(confData);

export interface ConfigFormat {}
