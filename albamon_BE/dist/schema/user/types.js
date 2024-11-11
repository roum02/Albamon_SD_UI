export const userTypes = `
  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type User {
    id: ID!
    name: String!
    birthDate: String!
    gender: Gender!
    occupation: String!
  }
`;
