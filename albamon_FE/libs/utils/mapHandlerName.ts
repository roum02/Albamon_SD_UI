type EventHandler = () => void;

interface HandlerMap {
  [key: string]: EventHandler;
}

const handlerMap: HandlerMap = {
  handleImageGroupClick: () => {
    alert('Image group clicked');
  },
  handleFloatingButtonClick: () => {
    alert('Floating button clicked');
  },
  handleKakaoShareClick: () => {
    alert('Kakao share clicked');
  },
  handleImageDownload: () => {
    alert('Image download clicked');
  },
  handleTextCopy: () => {
    alert('Text copy clicked');
  },
};

export const mapHandlerName = (handlerName: string): EventHandler => {
  return (
    handlerMap[handlerName] ||
    (() => console.warn(`Handler ${handlerName} not found`))
  );
};
