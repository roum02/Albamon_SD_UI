import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema/index.js";
const port = process.env.PORT || 4000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    cors: {
        origin: "*",
        credentials: true,
    },
});
server.listen(port).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
