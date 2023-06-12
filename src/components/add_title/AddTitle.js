import "./styles.css";

function AddTitle(props) {
  return (
    <div className="subheader_input">
      <label>
        <b>Add title</b>
      </label>
      <input
        type="text"
        value={props.subheader}
        onChange={(e) => props.setSubHeader(e.target.value)}
        name="sub-header"
      />
    </div>
  );
}

export default AddTitle;
