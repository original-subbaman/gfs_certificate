import checkBox from '../assets/done_check_box.png';
import emptyCheckBox from '../assets/blank_check_box.png';
const CheckBoxBar = (props) => {
  const divStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  }
  const pStyles = {
    marginRight: 10,
  }
  const icon = (props.data >= 1) ? checkBox : emptyCheckBox;
  return (
    <div style={divStyles}>
      <p style={pStyles}>{props.header}</p>
      <img src={icon} alt='check box' width={20} height={20}/>
    </div>
  );
};

export default CheckBoxBar;
