export const Split = ({ backgroundColor, paddingLeft, paddingRight }) => {
  return (
    <div style={{ paddingLeft, paddingRight, backgroundColor }}>
      <hr
        style={{
          width: '100%',
          boxSizing: 'border-box',
          borderTop: '3px dashed #DDDDDD',
          backgroundColor,
          margin: 0,
        }}
      />
    </div>
  );
};
