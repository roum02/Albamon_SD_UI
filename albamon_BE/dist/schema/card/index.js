import { cardTypes } from "./types.js";
import { cardQueries } from "./queries.js";
import { cardResolvers } from "./resolvers.js";
export const cardSchema = {
    types: cardTypes,
    queries: cardQueries,
    resolvers: cardResolvers,
};
