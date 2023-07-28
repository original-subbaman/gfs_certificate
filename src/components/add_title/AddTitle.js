import "./styles.css";

function AddTitle(props) {
  return (
    <div className="subheader_input">
      <label>
        <b>{props.header}</b>
      </label>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        name="sub-header"
      />
    </div>
  );
}

export default AddTitle;
