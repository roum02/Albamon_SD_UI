export const userQueries = `
  type Query {
    users: [User!]!
    user(id: ID!): User
  }
`;
