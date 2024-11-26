export const Group = ({
  backgroundColor,
  width,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor,
        width,
        paddingTop,
        paddingBottom,
        paddingLeft,
      }}
    >
      {children}
    </div>
  );
};
