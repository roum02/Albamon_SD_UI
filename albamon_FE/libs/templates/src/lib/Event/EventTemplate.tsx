import { useQuery } from '@apollo/client';
import { GET_EVENT_LIST } from '@graphql/event';

export const EventTemplate = () => {
  const {
    data: eventList,
    loading,
    error,
  } = useQuery(GET_EVENT_LIST, {
    // TODO 임의 eventId
    variables: { eventId: '1' },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : {error?.message} </p>;

  return <h1>event header</h1>;
};
