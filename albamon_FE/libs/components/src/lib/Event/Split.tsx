export const Split = ({ ...props }) => {
  return (
    <div
      style={{
        width: '100%',
        boxSizing: 'border-box',
        borderTop: '5px dashed #DDDDDD',
        backgroundColor: '#fff',
        ...props,
      }}
    />
  );
};
