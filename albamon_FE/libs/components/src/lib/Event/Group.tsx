export const Group = ({
  backgroundColor,
  width,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  display,
  direction,
  justifyContent,
  alignItems,
  gap,
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
        paddingRight,
        display,
        direction,
        justifyContent,
        alignItems,
        gap,
      }}
    >
      {children}
    </div>
  );
};
