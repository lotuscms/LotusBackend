import { createConnections } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

export async function apolloStartup(port?: number) {
    await createConnections();
    const resolvers = [__dirname + `/model-resolvers/**/resolver{.js,.ts}`];

    // FIXME: Breaks because there are no resolver present
    const schema = await buildSchema({
        resolvers,
        validate: false
        // authChecker: ({ context }: { context }, roles) => {} // TODO: Implment this with login
    });
    const apolloServer = new ApolloServer({
        schema,
        playground: true
    });
    const { url } = await apolloServer.listen(port || 4000);
    console.info(`Apollo server running, GraphQL Playground available at ${url}`);
}
