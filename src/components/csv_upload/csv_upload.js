import "./styles.css";

function CSVUpload(props) {
  return (
    <div className="upload_csv">
      <label>
        <b>Upload your CSV</b>
      </label>
      <input type="file" onChange={props.handleFileUpload} name="upload_file" />
      <button onClick={props.onLoadClick}>Load</button>
    </div>
  );
}

export default CSVUpload;
