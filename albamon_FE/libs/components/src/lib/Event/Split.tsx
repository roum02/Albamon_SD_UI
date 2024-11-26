export const Split = ({ marginTop, marginBottom, marginLeft, marginRight }) => {
  return (
    <hr
      style={{
        width: '100%',
        borderTop: '5px dashed #DDDDDD',
        backgroundColor: '#fff',
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
      }}
    />
  );
};
