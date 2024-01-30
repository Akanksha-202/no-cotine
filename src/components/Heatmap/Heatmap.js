import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);

// Display only even labels
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );

export default function HeatmapComponent() {
  return (
    <div style={{ fontSize: "13px" }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"bottom"}
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={data}
        squares
        height={45}
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(255, 0, 0, ${1 - (max - value) / (max - min)})`, // Change to red
          fontSize: "11.5px",
          color: "#fff", // Change text color to white
          fontWeight: "bold", // Make text bold
          border: "1px solid #fff", // Add a border to each cell
          boxSizing: "border-box", // Include border in cell size calculation
        })}
        cellRender={value => value && <div>{value}</div>}
      />
    </div>
  );
}
