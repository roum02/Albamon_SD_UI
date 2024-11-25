export const Image = ({
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
