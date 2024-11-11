export const userMutations = `
  type Mutation {
    createUser(
      name: String!
      birthDate: String!
      gender: Gender!
      occupation: String!
    ): User!
  }
`;
