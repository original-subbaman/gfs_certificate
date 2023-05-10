import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function DonutChart(data) {
  const donutData = {
    labels: ["Total Sessions", "Sessions Attended"],
    datasets: [
      {
        label: "Session's Attended",
        data: data.data,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <Doughnut
      data={donutData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
        },
      }}
    />
  );
}

export default DonutChart;
