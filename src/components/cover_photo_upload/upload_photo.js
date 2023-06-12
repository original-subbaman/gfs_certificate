import "./styles.css";

function UploadPhoto(props) {
  return (
    <div className="upload_photo">
      <label>
        <b>Upload Group Photo</b>
      </label>
      <input
        type="file"
        onChange={(e) =>
          props.setGroupPhoto(URL.createObjectURL(e.target.files[0]))
        }
        accept="image/png, image/jpeg"
      />
    </div>
  );
}

export default UploadPhoto;
