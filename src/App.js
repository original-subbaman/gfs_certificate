import "./App.css";
import GFSReport from "./layouts/gfs_report/gfs_report.js";
import CSVUpload from "./components/csv_upload/csv_upload";
import AddTitle from "./components/add_title/AddTitle";
import html2canvas from "html2canvas";
import { useState } from "react";
import sigOne from "./assets/sigone.jpeg"; 
import sigTwo from "./assets/sigtwo.jpeg";

function App() {
  const [csvData, setCsvData] = useState([]);
  const [groupPhoto, setGroupPhoto] = useState("");
  const [radarData, setRadarData] = useState([]);
  const [name, setName] = useState("");
  const [sessionNumber, setSessionNumber] = useState("");
  const [sessionText, setSessionText] = useState("");
  const [nickName, setNickName] = useState("");
  const [comment, setComment] = useState("");
  const [donutData, setDonutData] = useState([]);
  const [studentImgUrl, setStudentImgUrl] = useState("");
  const [studentGroup, setStudentGroup] = useState("");
  const [subheader, setSubHeader] = useState("");
  const [extraSessionTitleOne, setExtraSessionTitleOne] = useState(""); 
  const [extraSessionDataOne, setExtraSessionDataOne] = useState(0);
  const [extraSessionTitleTwo, setExtraSessionTitleTwo] = useState("");
  const [extraSessionDataTwo, setExtraSessionDataTwo] = useState(0);
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
        const currentLine = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
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
        if (obj.Name.toLowerCase() === "average") {
          avgData.push(obj);
        } else {
          data.push(obj);
        }
      }};
    reader.readAsText(file);
    setCsvData(data);
    setRadarAvg(avgData);
  };

  const handleOnNextClick = () => {
    if (index + 1 > csvData.length) {
      setIndex(0);
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

  function convertMiddleNameToInitial(name){
    const splitName = name.split(" ");
    if(splitName.length > 2){
      splitName[1] = splitName[1][0] + ".";
      return splitName.join(" ");
    }else{
      return name;
    }
  }

  function setReportValues(value) {
    console.log(value);
    if(getIdFromLink(value.CoverPhoto) !== groupPhoto){
      setGroupPhoto(getIdFromLink(value.CoverPhoto));
    }
    setName(convertMiddleNameToInitial(value.Name));
    setStudentGroup(value.Group);
    setSessionNumber(value.TotalPresent);
    setSessionText(
      `SESSIONS ATTENDED OUT OF ${value.TotalSession}`
    );
    setNickName(value.Comment);
    setComment(value.CoachMessage);

    const groupAvg = getGroupAvg(value.Group);
    setRadarData([
      [value.Tec, value.Psy, value.Soc, value.Phy],
      [groupAvg.Tec, groupAvg.Psy, groupAvg.Soc, groupAvg.Phy],
    ]);
    setExtraSessionDataOne(value.HolidaySession); 
    setExtraSessionDataTwo(value.ParentInvolvement);
    setDonutData([value.TotalPresent, value.TotalSession]);
    setStudentImgUrl(getIdFromLink(value.PhotoUrl));
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
        <h1>GFS Certificate Builder</h1>
        <CSVUpload
          onLoadClick={onLoadClick}
          handleFileUpload={handleFileUpload}
        />
        <AddTitle header={"Add Title"} value={subheader} setValue={setSubHeader} />
        <AddTitle header={"Add Sub Title"} value={extraSessionTitleOne} setValue={setExtraSessionTitleOne} />
        <AddTitle header={"Add Sub Title"} value={extraSessionTitleTwo} setValue={setExtraSessionTitleTwo} />
     
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
        studentGroup={studentGroup}
        studentPhoto={studentImgUrl}
        sessionNumber={sessionNumber}
        sessionText={sessionText}
        teacherCommentTitle={nickName}
        teacherComment={comment}
        donutChartData={donutData}
        extraSessionTitleOne={extraSessionTitleOne}
        extraSessionDataOne={extraSessionDataOne}
        extraSessionTitleTwo={extraSessionTitleTwo}
        extraSessionDataTwo={extraSessionDataTwo}
        radarData={radarData}
        signaturePicOne={sigOne}
        signaturePicTwo={sigTwo}
        signatureOneTitle={"Director"}
        signatureOneOrg={"Tashi Namgyal Academy"}
        signatureTwoTitle={"Director"}
        signatureTwoOrg={"Khelum Foundation"}
      />
    </div>
  );
}

export default App;
