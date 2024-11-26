export const Footer = ({
  text,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  textAlign,
  children,
}) => (
  <footer
    style={{
      backgroundColor,
      color,
      fontSize,
      fontWeight,
      textAlign,
    }}
  >
    {text}
    <div>{children}</div>
  </footer>
);
