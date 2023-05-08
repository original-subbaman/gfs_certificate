import "./gfs_report.css";
import DonutChart from "../../components/donut_chart";
import RadarChart from "../../components/radar_chart";
import Player from "../../assets/messi.png";
import Cover from "../../assets/cover.jpg";
import CustomProgressBar from "../../components/progress_bar";
import GFSLogo from "../gfs_report/assets/GFS_logo.png";
import TNALogo from "../gfs_report/assets/TNA_logo.png";
import KhelumLogo from "../gfs_report/assets/Khelum_logo.png";
function GFSReport(props) {
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
            <h3>{props.subheading}</h3>
            <h1>{props.heading}</h1>
          </div>
          <div className="logo_group">
            <img src={TNALogo} alt="logo one" />
            <img src={GFSLogo} alt="logo two" />
          </div>
        </header>
        <hr className="rounded" />
        <section>
          <div className="cover_pic">
            <img id="class_photo" src={Cover} alt="cover" />
          </div>
        </section>
        <hr className="rounded" />
        <section className="score_section">
          <div className="profile">
            <h1>{props.studentName}</h1>
            <div className="profile_pic">
              <img src={Player} width="auto" alt="student" />
            </div>
          </div>
          <div>
            <div className="session_stats">
              <div className="donut_chart">
                <DonutChart data={props.donutChartData} />
              </div>
              <p className="session_number">{props.sessionNumber}</p>
              <div className="session_text">
                <p>{props.sessionText}</p>
              </div>
            </div>
            <div className="bar_stats">
              <CustomProgressBar {...props.progressBarData[0]} />
              <CustomProgressBar {...props.progressBarData[1]} />
            </div>
          </div>
          <div className="radar_chart">
            <RadarChart data={props.radarData} />
          </div>
        </section>
        <hr className="rounded" />
        <section className="comment_section">
          <h1>{props.teacherCommentTitle}</h1>
          <p>{props.teacherComment}</p>
        </section>
        <hr className="rounded" />
        <div className="khelum">
          <img id="khelum_logo" src={KhelumLogo} alt="Khelum logo" />
        </div>
      </div>
    </div>
  );
}

export default GFSReport;
