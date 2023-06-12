import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
Chart.register(RadialLinearScale, PointElement, LineElement, Legend, Tooltip);

function RadarChart(dataPoints) {
  const dataOptionsPrimary = {
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgb(255, 99, 255)",
    pointBackgroundColor: "rgb(255, 99, 132)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(255, 99, 132)",
    borderJointStyle: "round",
  };
  const dataOptionsSecondary = {
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgb(54, 162, 235)",
    pointBackgroundColor: "rgb(54, 162, 235)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(54, 162, 235)",
    borderJointStyle: "round",
  };

  const data = {
    labels: ["Technical", "Psychological", "Social", "Physical"],
    datasets: [
      {
        label: "Participant's Score",
        data: dataPoints.data[0],
        fill: true,
        ...dataOptionsPrimary,
      },
      {
        label: "Group Average Score",
        data: dataPoints.data[1],
        fill: true,
        ...dataOptionsSecondary,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          font: {
            family: "Glacial Indifference",
          },
        },
      },
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            family: "Glacial Indifference",
            size: 12,
          },
        },
        angleLines: { display: true },
        grid: {
          circular: true,
          color: ["orange"],
        },
        suggestedMin: 0,
        suggestedMax: 4,
      },
    },
  };
  console.log(dataPoints[0]);
  return <Radar data={data} options={options} />;
}

export default RadarChart;
