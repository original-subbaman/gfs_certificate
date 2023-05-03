import ProgressBar from "@ramonak/react-progress-bar";
const CustomProgressBar = (props) => {
  return (
    <div>
      <p>{props.header}</p>
      <ProgressBar
        completed={props.completed}
        maxCompleted={props.maxCompleted}
        customLabel={props.label}
      />
    </div>
  );
};

export default CustomProgressBar;
