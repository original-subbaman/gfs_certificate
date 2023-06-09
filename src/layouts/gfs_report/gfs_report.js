import "./gfs_report.css";
import DonutChart from "../../components/donut_chart";
import RadarChart from "../../components/radar_chart";
import Player from "./assets/3.png";
import CustomProgressBar from "../../components/progress_bar";
import GFSLogo from "../gfs_report/assets/GFS_logo.png";
import TNALogo from "../gfs_report/assets/TNA_logo.png";
import KhelumLogo from "../gfs_report/assets/Khelum_logo.png";
import Signature from "../../components/signature/signature";
function GFSReport(props) {
  return (
    <div id="report" className="main">
      <div className="content">
        <header>
          <div className="title_group">
            <h3>{props.subheading}</h3>
            <h1>{props.heading}</h1>
          </div>
          <div className="logo_group">
            <img id="logo" src={TNALogo} alt="logo one" />
            <img id="logo" src={GFSLogo} alt="logo two" />
            <img id="logo" src={KhelumLogo} alt="Khelum logo" />
          </div>
        </header>
        <hr className="rounded" />
        <section id="cover_photo">
          <div className="cover_pic">
            <img
              id="class_photo"
              src={`https://drive.google.com/uc?export=view&id=${props.coverPhoto}`}
              alt="cover"
            />
          </div>
        </section>
        <hr className="rounded" />
        <section className="score_section">
          <div className="profile">
            <h1>{props.studentName}</h1>
            <div className="profile_pic">
              <img
                src={`https://drive.google.com/uc?export=view&id=${props.studentPhoto}`}
                width="auto"
                alt="student"
              />
            </div>
          </div>
          <div className="session_score">
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
        <section className="signature_section">
          <Signature
            title={props.signatureOneTitle}
            org={props.signatureOneOrg}
          />
          <Signature
            title={props.signatureTwoTitle}
            org={props.signatureTwoOrg}
          />
        </section>
      </div>
    </div>
  );
}

export default GFSReport;
