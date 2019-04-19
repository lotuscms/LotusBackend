import { apolloStartup } from './apolloServer';
import { generateOrmConfig, config } from './config';

async function startup() {
    generateOrmConfig(config, '.');
    await apolloStartup();
}

startup();
