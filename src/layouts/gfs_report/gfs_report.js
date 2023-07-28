import "./gfs_report.css";
import DonutChart from "../../components/donut_chart";
import RadarChart from "../../components/radar_chart";
import GroupPhoto from "../../components/group_photo";
import CheckBoxBar from "../../components/progress_bar";
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

          </div>
        </header>
        <hr className="rounded" />
        <section id="cover_photo">
          <GroupPhoto coverPhoto={props.coverPhoto} />
        </section>
        <hr className="rounded" />
        <section className="score_section">
          <div className="profile">
            {/* Student Name */}
            <h1>{props.studentName}</h1>
            <h4>{props.studentGroup}</h4>
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
              <CheckBoxBar header={props.extraSessionTitleOne} data={props.extraSessionDataOne} />
              <CheckBoxBar header={props.extraSessionTitleTwo} data={props.extraSessionDataTwo} />
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
          <img id="logo" src={KhelumLogo} alt="Khelum logo" />
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
