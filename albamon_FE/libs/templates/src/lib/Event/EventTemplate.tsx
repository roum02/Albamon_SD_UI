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

  return (
    <>
      {eventList.getEventPageComponents.components.map((item, index) => (
        <RenderComponent key={`${item.type}_${index}`} {...item} />
      ))}
    </>
  );
};

const Title = ({ text, fontSize, fontWeight, textAlign, color }) => (
  <h1
    style={{
      fontSize,
      fontWeight,
      textAlign,
      color,
    }}
  >
    {text}
  </h1>
);

const ImageWithButton = ({
  imageUrl,
  buttonText,
  buttonBackgroundColor,
  buttonTextColor,
  children,
}) => (
  <div>
    <img src={imageUrl} alt="example" />
    <button
      style={{
        backgroundColor: buttonBackgroundColor,
        color: buttonTextColor,
      }}
      onClick={() =>
        children?.find((child) => child.type === 'BUTTON')?.onClick?.()
      }
    >
      {buttonText}
    </button>
  </div>
);

const Image = ({
  imageUrl,
  backgroundColor,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}) => (
  <div
    style={{
      backgroundColor,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
    }}
  >
    <img src={imageUrl} alt="example" />
  </div>
);

const FloatingButton = ({
  text,
  backgroundColor,
  textColor,
  position,
  bottom,
}) => (
  <button
    style={{
      position,
      bottom,
      backgroundColor,
      color: textColor,
    }}
  >
    {text}
  </button>
);

const Footer = ({ text, fontSize, fontWeight, textAlign, color }) => (
  <footer
    style={{
      fontSize,
      fontWeight,
      textAlign,
      color,
    }}
  >
    {text}
  </footer>
);

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
