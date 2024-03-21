// STEP 1 - Include Dependencies
// Include react
import React from "react";
// import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations
const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2D", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Stats Per language",
        //Set the chart subcaption
        //Set the theme for your chart
        theme: "fusion",
        decimals: 0,
        showPercentValues: 0,
        doughnutRadius: "45%",
        theme: "candy",
      },
      // Chart Data
      data,
    },
  };

  // STEP 4 - Creating the DOM element to pass the react-fusioncharts component

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
