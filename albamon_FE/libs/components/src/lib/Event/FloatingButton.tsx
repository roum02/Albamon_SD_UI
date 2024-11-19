export const FloatingButton = ({
  text,
  backgroundColor,
  textColor,
  position,
  bottom,
  // TODO 데이터 구조 변경 요청
  onClick,
}) => (
  <button
    style={{
      position,
      bottom,
      backgroundColor,
      color: textColor,
    }}
    onClick={onClick}
  >
    {text}
  </button>
);
