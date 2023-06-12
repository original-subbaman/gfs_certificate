import "./App.css";
import GFSReport from "./layouts/gfs_report/gfs_report.js";
import CSVUpload from "./components/csv_upload/csv_upload";
import AddTitle from "./components/add_title/AddTitle";
import html2canvas from "html2canvas";
import { useState } from "react";

function App() {
  const [csvData, setCsvData] = useState([]);
  const [groupPhoto, setGroupPhoto] = useState();
  const [radarData, setRadarData] = useState([]);
  const [name, setName] = useState("");
  const [sessionNumber, setSessionNumber] = useState("");
  const [sessionText, setSessionText] = useState("");
  const [nickName, setNickName] = useState("");
  const [comment, setComment] = useState("");
  const [donutData, setDonutData] = useState([]);
  const [studentImgUrl, setStudentImgUrl] = useState();
  const [progressData, setProgressData] = useState([]);
  const [subheader, setSubHeader] = useState("");
  const [index, setIndex] = useState(1);
  const [radarAvg, setRadarAvg] = useState([]);
  const data = [];
  const avgData = [];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const csv = reader.result;
      const lines = csv.split(/\n|\r\n/);
      const headers = lines[0].split(",");
      for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(",");
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          if (
            headers[j] === "Tec" ||
            headers[j] === "Psy" ||
            headers[j] === "Soc" ||
            headers[j] === "Phy"
          ) {
            obj[headers[j]] = parseFloat(currentLine[j]);
          } else {
            obj[headers[j]] = currentLine[j];
          }
        }
        if (obj.Name === "AVERAGE") {
          avgData.push(obj);
        } else {
          data.push(obj);
        }
      }
    };
    reader.readAsText(file);
    setCsvData(data);
    setRadarAvg(avgData);
  };

  const handleOnNextClick = () => {
    if (index + 1 > csvData.length) {
      setIndex(0);
      return;
    } else {
      setIndex((prev) => prev + 1);
      setReportValues(csvData[index]);
    }
  };

  //Populates the certificate template with the first data
  //Reset index variable to 1
  function onLoadClick() {
    setReportValues(csvData[0]);
    setIndex(1);
  }

  function getGroupAvg(group) {
    for (let i = 0; i < radarAvg.length; i++) {
      const groupAvg = radarAvg[i];
      if (groupAvg.Group === group) {
        return groupAvg;
      }
    }
  }

  function setReportValues(value) {
    setGroupPhoto(getIdFromLink(value.CoverPhoto));
    setName(value.Name);
    setSessionNumber(value.TotalPresent);
    setSessionText(
      `${value.TotalPresent} SESSIONS ATTENDED OUT OF ${value.TotalSession}`
    );
    setNickName(value.Comment);
    setComment(value.CoachMessage);

    const groupAvg = getGroupAvg(value.Group);
    setRadarData([
      [value.Tec, value.Psy, value.Soc, value.Phy],
      [groupAvg.Tec, groupAvg.Psy, groupAvg.Soc, groupAvg.Phy],
    ]);
    setDonutData([value.TotalPresent, value.TotalSession]);
    setStudentImgUrl(getIdFromLink(value.PhotoUrl));
    setProgressData([
      {
        completed: value.ParentInvolvement,
        maxCompleted: 1,
        label: `${value.TotalPresent}/1`,
        header: "Parent Session",
      },
      {
        completed: value.HolidaySession,
        maxCompleted: 1,
        label: `${value.HolidaySession}/1`,
        header: "Holiday Session",
      },
    ]);
  }

  //Google drive link eg:https://drive.google.com/file/d/1vqboEJaQEfhcwHWiCEl2_cuaOrbO35CR/view?usp=sharing
  //this function is just to get the file id which is  1vqboEJaQEfhcwHWiCEl2_cuaOrbO35CR
  function getIdFromLink(link) {
    const parts = link.split("/");
    return parts[5];
  }

  const generatePDF = () => {
    const element = document.querySelector("#report");
    html2canvas(element).then((canvas) => {
      var link = document.createElement("a");
      link.download =
        csvData[index].Name +
        "_" +
        csvData[index].Group +
        "_" +
        csvData[index].Grade +
        ".png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="app_main">
      <div className="form">
        <h1>Amazing Fantastic OMG Ek Dum Certificate Builder</h1>
        <CSVUpload
          onLoadClick={onLoadClick}
          handleFileUpload={handleFileUpload}
        />
        <AddTitle subheader={subheader} setSubHeader={setSubHeader} />
        <div className="button_group">
          <button onClick={handleOnNextClick}>Next</button>
          <button onClick={generatePDF}>Generate PDF</button>
        </div>
      </div>
      <GFSReport
        subheading={subheader}
        heading={"Progress Report"}
        coverPhoto={groupPhoto}
        studentName={name}
        studentPhoto={studentImgUrl}
        sessionNumber={sessionNumber}
        sessionText={sessionText}
        teacherCommentTitle={nickName}
        teacherComment={comment}
        donutChartData={donutData}
        progressBarData={progressData}
        radarData={radarData}
        signatureOneTitle={"Director"}
        signatureOneOrg={"Tashi Namgyal Academy"}
        signatureTwoTitle={"Director"}
        signatureTwoOrg={"Khelum Foundation"}
      />
    </div>
  );
}

export default App;
