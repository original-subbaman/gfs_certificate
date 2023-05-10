import "./App.css";
import GFSReport from "./layouts/gfs_report/gfs_report.js";

function App() {
  const radarData = [
    [65, 59, 90, 81],
    [28, 48, 40, 19],
  ];
  const donutChartData = [24, 21];
  const progressBarData = [
    {
      completed: "10",
      maxCompleted: 12,
      label: "10/12",
      header: "Parent Session",
    },
    {
      completed: "10",
      maxCompleted: 12,
      label: "10/12",
      header: "Holiday Session",
    },
  ];
  return (
    <div>
      <GFSReport
        subheading={"Quater_2: JUNE, JULY, AUGUST 2022"}
        heading={"Progress Report"}
        studentName={"Mr. L"}
        sessionNumber={"21"}
        sessionText={"SESSIONS ATTENDED OUT OF 24"}
        teacherCommentTitle={"The Smile King"}
        teacherComment={
          "Mr.L is a very keen on learning and a very active listener which benefits his football activities."
        }
        donutChartData={donutChartData}
        progressBarData={progressBarData}
        radarData={radarData}
      />
    </div>
  );
}

export default App;
