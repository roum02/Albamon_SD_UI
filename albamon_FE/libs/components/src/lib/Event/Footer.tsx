export const Footer = ({ text, fontSize, fontWeight, textAlign, color }) => (
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
