export const FloatingButton = ({
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
