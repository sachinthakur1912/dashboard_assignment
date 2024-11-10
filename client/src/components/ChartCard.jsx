import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartCard = () => {
  const [timeRange, setTimeRange] = useState("All");

  // Sample data (you can replace this with your actual data)
  const data = {
    labels: ["7D", "15D", "1M", "6M", "1Y"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [10, 20, 15, 25, 30],
        borderColor: "rgba(0, 123, 255, 1)", // Blue color for the line
        borderWidth: 2,
        pointBackgroundColor: "rgba(0, 123, 255, 1)",
        pointBorderWidth: 2,
        fill: false,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Disable y-axis grid lines for a cleaner look
        },
      },
      x: {
        grid: {
          display: false, // Disable x-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend for simplicity
      },
    },
  };

  return (
    <div className="p-4 rounded-3xl  shadow-md border border-customBorder2  ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Engagement Rate</h2>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="border border-customProgressBlue rounded-3xl px-2 py-1 text-sm focus:outline-none"
        >
          <option value="All">All</option>
          <option value="7D">7 Days</option>
          <option value="15D">15 Days</option>
          <option value="1M">1 Month</option>
          <option value="6M">6 Months</option>
          <option value="1Y">1 Year</option>
        </select>
      </div>
      <div className="h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartCard;
