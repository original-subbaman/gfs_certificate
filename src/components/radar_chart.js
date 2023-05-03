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

function RadarChart({ data }) {
  return <Radar data={data} />;
}

export default RadarChart;
