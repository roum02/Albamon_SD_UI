import { mapHandlerName } from '@utils/mapHandlerName';

export const FloatingButton = ({
  text,
  backgroundColor,
  textColor,
  position,
  width,
  height,
  bottom,
  fontSize,
  fontWeight,
  // TODO 데이터 구조 변경 요청
  onClick,
}) => (
  console.log(onClick),
  (
    <button
      style={{
        position: 'fixed',
        bottom,
        backgroundColor,
        color: textColor,
        border: 'none',
        width,
        height,
        fontSize,
        fontWeight,
        zIndex: 1000,
        borderRadius: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: 500,
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
      }}
      onClick={mapHandlerName(onClick)}
    >
      {text}
    </button>
  )
);
