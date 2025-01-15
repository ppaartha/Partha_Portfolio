// ScoreChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ScoreChart = () => {
  const data1 = {
    labels: ["Verbal", "Quant", "Writing"],
    datasets: [
      {
        label: "GRE Score",
        data: [155, 160, 4.5],
        backgroundColor: "rgba(84, 128, 134, 0.9)",
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Listening", "Reading", "Writing", "Speaking"],
    datasets: [
      {
        label: "IELTS Score",
        data: [7.5, 7.0, 7.0, 8.0],
        backgroundColor: "rgba(137, 129, 176, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderWidth: 1,
      },
    ],
  };

  //   const options = {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: true,
  //         position: 'top',
  //       },
  //     },
  //   };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => value,
        font: {
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="chart__container container grid">
      <div className="chart__item">
        <Bar data={data1} options={options} />
        <h4>Total GRE Score: 315</h4>
      </div>
      <div className="chart__item">
        <Bar data={data2} options={options} />
        <h4>Overall Band Score: 7.5</h4>
      </div>
    </div>
  );
};

export default ScoreChart;
