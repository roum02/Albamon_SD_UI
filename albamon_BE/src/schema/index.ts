import { gql } from "apollo-server";
import { userSchema } from "./user/index.js";

export const typeDefs = gql`
  ${userSchema.types}

  ${userSchema.queries}

  ${userSchema.mutations}
`;
