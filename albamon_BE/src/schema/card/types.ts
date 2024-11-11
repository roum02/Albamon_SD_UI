export const cardTypes = `
  type Card {
    franchiseCode: Int!
    franchiseName: String!
    franchiseLogo: String!
    keywordCode: String!
    keywordName: String
    partCode: String!
    partName: String
  }

  type CardResponse {
    resultCode: String!
    resultMessage: String!
    totalCount: Int!
    row: Int!
    column: Int!
    collection: [Card!]!
  }
`;
