export const Image = ({
  imageUrl,
  backgroundColor,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  width,
  display,
  justifyContent,
  imageWidth,
  height,
  onClick,
}) => (
  <div
    style={{
      backgroundColor,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      height,
      display,
      justifyContent,
      boxSizing: 'border-box',
    }}
  >
    <img src={imageUrl} alt="example" style={{ width }} />
  </div>
);
