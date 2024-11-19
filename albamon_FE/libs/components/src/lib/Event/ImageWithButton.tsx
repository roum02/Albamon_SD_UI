export const ImageWithButton = ({
  imageUrl,
  buttonText,
  buttonBackgroundColor,
  buttonTextColor,
  children,
  onClick,
}) => (
  <div>
    <img src={imageUrl} alt="example" />
    <button
      style={{
        backgroundColor: buttonBackgroundColor,
        color: buttonTextColor,
      }}
      onClick={() =>
        children?.find((child) => child.type === 'BUTTON')?.onClick?.()
      }
    >
      {buttonText}
    </button>
  </div>
);
