import { gql } from "apollo-server";
import { userSchema } from "./user/index.js";
import { bannerSchema } from "./banner/index.js";
import { cardSchema } from "./card/index.js";
export const typeDefs = gql `
  ${userSchema.types}
  ${bannerSchema.types}
  ${cardSchema.types}

  ${userSchema.queries}
  ${bannerSchema.queries}
  ${cardSchema.queries}

  ${userSchema.mutations}
`;
export const resolvers = {
    Query: {
        ...userSchema.resolvers.Query,
        ...bannerSchema.resolvers.Query,
        ...cardSchema.resolvers.Query,
    },
    Mutation: {
        ...userSchema.resolvers.Mutation,
    },
};
