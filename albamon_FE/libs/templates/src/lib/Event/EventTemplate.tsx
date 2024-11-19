import { useQuery } from '@apollo/client';
import { GET_EVENT_LIST } from '@graphql/event';
import {
  FloatingButton,
  Footer,
  ImageWithButton,
  Title,
  Image,
} from '@components/lib';
import {
  eventHandlers,
  EventHandlerType,
  EventUserType,
} from '@utils/eventHandler';

const EVENT_BUTTONS = ['BUTTON', 'FLOATING_BUTTON', 'IMAGE_WITH_BUTTON'];

const MAPPED_COMPONENTS = {
  TITLE: Title,
  IMAGE_WITH_BUTTON: ImageWithButton,
  IMAGE: Image,
  FLOATING_BUTTON: FloatingButton,
  FOOTER: Footer,
};

const handleButtonEvent = (
  eventType: EventHandlerType,
  params?: EventUserType
) => {
  const handler = eventHandlers.get(eventType);
  if (handler) {
    handler(params);
  }
};

const RenderComponent = (data) => {
  if (!data?.type) {
    return;
  }
  const Component = MAPPED_COMPONENTS[data.type];
  return (
    Component && (
      <Component
        {...data}
        onClick={() => {
          EVENT_BUTTONS.includes(data.type) &&
            handleButtonEvent(data.type, { name: 'roum' });
        }}
      />
    )
  );
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
