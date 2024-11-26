export const Button = ({
  onClick,
  width,
  height,
  color,
  text,
  backgroundColor,
  borderRadius,
}) => (
  <button
    style={{
      width,
      height,
      color,
      backgroundColor,
      borderRadius,
    }}
  >
    {text}
  </button>
);
