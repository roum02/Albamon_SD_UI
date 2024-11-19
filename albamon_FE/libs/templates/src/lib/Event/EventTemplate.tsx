import { useQuery } from '@apollo/client';
import { GET_EVENT_LIST } from '@graphql/event';
import {
  FloatingButton,
  Footer,
  ImageWithButton,
  Title,
  Image,
} from '@components/lib';

const MAPPED_COMPONENTS = {
  TITLE: Title,
  IMAGE_WITH_BUTTON: ImageWithButton,
  IMAGE: Image,
  FLOATING_BUTTON: FloatingButton,
  FOOTER: Footer,
};

const RenderComponent = (data) => {
  //console.log(data);
  const Component = MAPPED_COMPONENTS[data.type];
  return Component && <Component {...data} />;
};

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

  return (
    <>
      {eventList.getEventPageComponents.components.map((item, index) => (
        <RenderComponent key={`${item.type}_${index}`} {...item} />
      ))}
    </>
  );
};
