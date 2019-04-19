import * as fs from 'fs';
import * as path from 'path';

const confPath = path.resolve(__dirname, '../conf.json');
console.info('Reading config file : %s', confPath);

const confData = fs.readFileSync(confPath, 'utf-8');

export const config: ConfigFormat = JSON.parse(confData);

export interface ConfigFormat {
    host: string;
    port: number;
    databases: string[];
    username: string;
    password: string;
}

/**
 * Generates the ormconfig.json file that is used by type orm.
 * @param config Location to the config to be passed in.
 */
export function generateOrmConfig(config: ConfigFormat, path: string) {
    let conf = [];
    for (let db of config.databases) {
        conf.push({
            name: db,
            type: 'mysql',
            host: config.host,
            port: config.port,
            username: config.username,
            password: config.password,
            database: db,
            synchronize: false,
            entities: ['src/model-resolvers/**/*.ts', 'src/model-resolvers/**/*.js']
        });
    }
    const json = JSON.stringify(conf);
    fs.writeFileSync(`${path}/ormconfig.json`, json);
}
