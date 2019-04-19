import { apolloStartup } from './apolloServer';

async function startup() {
    await apolloStartup();
}

startup();
