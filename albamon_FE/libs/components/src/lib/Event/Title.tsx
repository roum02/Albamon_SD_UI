export const Title = ({ text, fontSize, fontWeight, textAlign, color }) => (
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
