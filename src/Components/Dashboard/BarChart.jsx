import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const barData = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Active Users",
        data: [0, 0, 0, 0, 100, 200, 300, 200, 0, 0, 0, 0],
        borderColor: ["rgba(213, 147, 68, 0.52)", "rgba(213, 147, 68, 0.52)"],
        backgroundColor: [
          "rgba(213, 147, 68, 0.52)",
          "rgba(213, 147, 68, 0.52)",
        ],
      },
    ],
  };
  return <Bar data={barData} />;
};

export default BarChart;
