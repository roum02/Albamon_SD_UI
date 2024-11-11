import { userTypes } from "./types.js";
import { userMutations } from "./mutations.js";
import { userQueries } from "./queries.js";
import { userResolvers } from "./resolvers.js";

export const userSchema = {
  types: userTypes,
  queries: userQueries,
  mutations: userMutations,
  resolvers: userResolvers,
};
