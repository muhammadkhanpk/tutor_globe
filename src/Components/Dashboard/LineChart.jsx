import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Jan", "March", "May", "July", "September", "November"],
    datasets: [
      {
        label: "2021",
        data: [1, 2, 3, 4, 4, 2, 1],
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
