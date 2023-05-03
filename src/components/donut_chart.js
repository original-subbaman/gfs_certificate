import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function DonutChart({ data }) {
  return (
    <Doughnut
      data={data}
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
