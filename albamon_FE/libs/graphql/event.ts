import { gql } from '@apollo/client';

export const GET_EVENT_LIST = gql`
  query GetEventPageComponents($eventId: ID!) {
    getEventPageComponents(eventId: $eventId) {
      resultCode
      resultMessage
      components
    }
  }
`;
