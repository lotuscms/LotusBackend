import * as fs from 'fs';
import * as path from 'path';

const confPath = path.resolve(__dirname, '../conf.json');
console.info('Reading config file : %s', confPath);

const confData = fs.readFileSync(confPath, 'utf-8');

export const config: ConfigFormat = JSON.parse(confData);
export const connections: { [name: string]: string } = {
    auth: '',
    characters: '',
    world: '',
    lotusCms: ''
};

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
    const conf = [];
    let isLotusCms = false;

    for (let db of config.databases) {
        isLotusCms = db.includes('lotuscms') ? true : false;
        conf.push(
            !isLotusCms
                ? {
                      name: db,
                      type: 'mysql',
                      host: config.host,
                      port: config.port,
                      username: config.username,
                      password: config.password,
                      database: db,
                      synchronize: isLotusCms, // We want to sync lotuscms database
                      entities: [
                          'src/model-resolvers/mysql/azerothCore/**/*.ts',
                          'src/model-resolvers/mysql/azerothCore/**/*.js'
                      ]
                  }
                : {
                      // TODO: Setup to use a custom section of the conf file.
                      name: db,
                      type: 'mysql',
                      host: config.host,
                      port: config.port,
                      username: config.username,
                      password: config.password,
                      database: db,
                      synchronize: isLotusCms,
                      entities: [
                          'src/model-resolvers/mysql/lotuscms/**/*.ts',
                          'src/model-resolvers/mysql/lotuscms/**/*.js'
                      ],
                      migrations: [
                          'build/model-resolvers/mysql/lotuscms/migration/*.ts',
                          'build/model-resolvers/mysql/lotuscms/migration/*.js'
                      ],
                      cli: {
                          migrationsDir: 'src/model-resolvers/mysql/lotuscms/migration'
                      }
                  }
        );
        // TODO: Think of a better way to handle this
        if (db.includes('auth')) {
            connections.auth = db;
        } else if (db.includes('characters')) {
            connections.characters = db;
        } else if (db.includes('world')) {
            connections.world = db;
        } else {
            connections.lotusCms = db;
        }
    }
    const json = JSON.stringify(conf);
    fs.writeFileSync(`${path}/ormconfig.json`, json);
}
