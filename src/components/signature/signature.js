
function Signature(props) {
  const imgStyle = {
    width: '200px',
    height: '100px',
    position: 'relative',
    marginTop: '5px',
    padding: '0px',
  }
  const divStyle = {
    padding: '0px', 
    marginBottom: '30px',
  }
  const pStyle = {
    padding: '0px', 
    margin: '0px'
  }
  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.signature} alt="Signature" />
      <p style={pStyle}>{props.title}</p>
      <p style={pStyle}>{props.org}</p>
    </div>
  );
}

export default Signature;
