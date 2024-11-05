import { ApolloServer } from "apollo-server";
// import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./schema/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 서버가 ${url}에서 실행 중입니다`);
});
