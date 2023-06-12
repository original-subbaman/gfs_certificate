import { useState } from "react";
import { CSVLink } from "react-csv";

const CSVUpload = (e) => {
  const [csvData, setCsvData] = useState([]);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const csv = reader.result;
      const lines = csv.split("/n");
      const headers = lines[0].split(",");
      const data = [];

      for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(",");
        if (currentLine.length === headers.length) {
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
          }
          data.push(obj);
        }
      }
    };

    reader.readAsText(file);
  };
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {csvData.length > 0 && (
        <CSVLink data={csvData} filename={"data.csv"}>
          Download Now
        </CSVLink>
      )}
    </div>
  );
};

export default CSVUpload;
