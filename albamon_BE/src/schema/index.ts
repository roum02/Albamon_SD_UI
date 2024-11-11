import { gql } from "apollo-server";
import { userSchema } from "./user/index.js";
import { bannerSchema } from "./banner/index.js";

export const typeDefs = gql`
  ${userSchema.types}
  ${bannerSchema.types}

  ${userSchema.queries}
  ${bannerSchema.queries}

  ${userSchema.mutations}
`;

export const resolvers = {
  Query: {
    ...userSchema.resolvers.Query,
    ...bannerSchema.resolvers.Query,
  },
  Mutation: {
    ...userSchema.resolvers.Mutation,
  },
};
