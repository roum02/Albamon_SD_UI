export const eventMutations = `
  type Mutation {
    participateEvent(eventId: ID!): Event!
    cancelEventParticipation(eventId: ID!): Event!
  }
`;
