export const Button = ({
  onClick,
  width,
  height,
  color,
  text,
  backgroundColor,
  buttonColor,
  borderRadius,
  paddingLeft,
  paddingRight,
  paddingBottom,
  borderWidth,
}) => (
  <div
    style={{
      width: '100%',
      margin: '0 auto',
      textAlign: 'center',
      paddingLeft,
      paddingRight,
      paddingBottom,
      boxSizing: 'border-box',
      backgroundColor,
      borderWidth,
    }}
  >
    <button
      style={{
        width,
        height,
        color,
        backgroundColor: buttonColor,
        borderRadius,
        border: 0,
        borderWidth,
      }}
    >
      {text}
    </button>
  </div>
);
