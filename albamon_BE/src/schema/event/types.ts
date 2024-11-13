export const eventTypes = `
  enum EventStatus {
    UPCOMING
    ONGOING
    ENDED
  }

  type Event {
    eventId: ID!
    title: String!
    description: String!
    thumbnailUrl: String!
    startDate: String!
    endDate: String!
    status: EventStatus!
    participants: Int!
    isParticipating: Boolean!
    reward: String
  }

  type EventResponse {
    resultCode: String!
    resultMessage: String!
    totalCount: Int!
    events: [Event!]!
  }
`;
