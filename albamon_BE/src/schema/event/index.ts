import { eventTypes } from "./types.js";
import { eventQueries } from "./queries.js";
import { eventResolvers } from "./resolvers.js";

export const eventSchema = {
  types: eventTypes,
  queries: eventQueries,
  resolvers: eventResolvers,
};
