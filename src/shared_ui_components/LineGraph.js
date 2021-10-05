import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const OPTIONS = {
  maintainAspectRatio: true,
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    label: {
      display: false,
    },
    x: {
      display: true,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "Poppins",
          size: 10,
          weight: 400,
        },
      },
    },
    y: {
      display: true,
      ticks: {
        display: true,
        font: {
          family: "Poppins",
          size: 10,
          weight: 400,
        },
        callback: function (value) {
          return "$" + value;
        },
      },
      grid: {
        display: false,
      },
      title: {
        display: false,
        text: "Value",
      },
    },
  },
};

function LineGraph(props) {
  const { data } = props;
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    if (data) {
      let _data = {
        labels: data.map((item) => item.y),
        datasets: [
          {
            label: "Progress",
            data: data.map((item) => item.x),
            fill: false,
            backgroundColor: "#6271D2",
            borderColor: "#6271D2",
          },
        ],
      };
      setGraphData(_data);
    } else {
    }
  }, [data]);

  return <Line data={graphData} options={OPTIONS} />;
}

export default LineGraph;
