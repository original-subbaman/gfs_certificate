import "./gfs_report.css";
import DonutChart from "../../components/donut_chart";
import RadarChart from "../../components/radar_chart";
import Player from "../../assets/messi.png";
import Cover from "../../assets/cover.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import CustomProgressBar from "../../components/progress_bar";
function GFSReport() {
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
  const data = {
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
  const options = {
    legend: {
      display: false,
    },
  };
  return (
    <div className="main">
      <div className="content">
        <header>
          <div className="title_group">
            <h3>Quater_2: JUNE, JULY, AUGUST 2022</h3>
            <h1>Progress Report</h1>
          </div>
          <div className="logo_group">
            <img src="#" alt="logo one" />
            <img src="#" alt="logo two" />
          </div>
        </header>
        <hr className="rounded" />
        <section>
          <div className="cover_pic">
            <img src={Cover} alt="cover" />
          </div>
        </section>
        <hr className="rounded" />
        <section className="score_section">
          <div className="profile">
            <h1>Thinley Bhutia</h1>
            <div className="profile_pic">
              <img src={Player} width="auto" alt="student" />
            </div>
          </div>
          <div>
            <div className="session_stats">
              <div className="donut_chart">
                <DonutChart data={data} />
              </div>
              <p className="session_number">21</p>
              <div className="session_text">
                <p>SESSIONS ATTENDED OUT OF 24</p>
              </div>
            </div>
            <div className="bar_stats">
              <CustomProgressBar
                completed={"10"}
                maxCompleted={"12"}
                label={"10/12"}
                header={"Parent Sessions"}
              />
              <CustomProgressBar
                completed={"10"}
                maxCompleted={"12"}
                label={"10/12"}
                header={"Holiday Sessions"}
              />
            </div>
          </div>
          <div className="radar_chart">
            <RadarChart data={RadarData} />
          </div>
        </section>
        <hr className="rounded" />
        <section className="comment_section">
          <h1>The Smile King</h1>
          <p>
            Thinlay is a very keen on learning and a very active listener which
            benefits his football activities.
          </p>
        </section>
        <hr className="rounded" />
      </div>
    </div>
  );
}

export default GFSReport;
