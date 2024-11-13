export const eventQueries = `
  type Query {
    getEvents(status: EventStatus): EventResponse!
    getEvent(eventId: ID!): Event
  }
`;
