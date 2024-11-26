import { IoMdArrowBack } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

export const Title = ({ text, fontSize, fontWeight, textAlign, color }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: '53px',
      justifyContent: 'space-between',
    }}
  >
    <IoMdArrowBack
      size={24}
      style={{ marginLeft: 20, marginRight: 15, flexShrink: 0 }}
      onClick={() => alert('back clicked')}
    />
    <div style={{ width: '100%' }}>
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
    </div>
    <RxHamburgerMenu
      size={24}
      style={{ marginRight: 20, marginLeft: 15, flexShrink: 0 }}
      onClick={() => alert('hamburger clicked')}
    />
  </div>
);
