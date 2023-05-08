import "./App.css";
import GFSReport from "./layouts/gfs_report/gfs_report.js";

function App() {
  const RadarData = {
    labels: ["Physical", "Technical", "Psychological", "Social"],
    datasets: [
      {
        label: "Participant's Score",
        data: [65, 59, 90, 81],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Group Average Score",
        data: [28, 48, 40, 19],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const donutChartData = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "Session's Attended",
        data: [24, 21],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const progressBarData = [
    {
      completed: "10",
      maxCompleted: "12",
      label: "10/12",
      header: "Parent Session",
    },
    {
      completed: "10",
      maxCompleted: "12",
      label: "10/12",
      header: "Holiday Session",
    },
  ];
  return (
    <GFSReport
      subheading={"Quater_2: JUNE, JULY, AUGUST 2022"}
      heading={"Progress Report"}
      studentName={"Thinley Bhutia"}
      sessionNumber={"21"}
      sessionText={"SESSIONS ATTENDED OUT OF 24"}
      teacherCommentTitle={"The Smile King"}
      teacherComment={
        "Thinlay is a very keen on learning and a very active listener which benefits his football activities."
      }
      donutChartData={donutChartData}
      progressBarData={progressBarData}
      radarData={RadarData}
    />
  );
}

export default App;
