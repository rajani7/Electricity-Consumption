import React, { useEffect, useState } from "react";
import { renderChart } from "../utils/chart.js";
import { groupByDay, sortByTime } from "../utils/reading";
import Card from "./Card.jsx";
import { chartFilterOptions } from "../utils/config.js";

export const EnergyConsumption = ({ readings }) => {
  const containerId = "usageChart";
  const [filterType, setFilterType] = useState(chartFilterOptions[0]);
  const [filteredData, setFilteredData] = useState([]);
  const [consumption, setConsumption] = useState(0);
  const [cost, setCost] = useState(0);
  const [footPrint, setFootPrint] = useState(0);

  useEffect(() => {
    renderChart(containerId, sortByTime(groupByDay(readings)));
    setFilteredData(sortByTime(groupByDay(readings)))
    console.log("readings", readings);
  }, []);

  useEffect(() => {
    const perKWH = 0.2347;
    const total = filteredData.reduce((t, cur) => t + cur.value, 0);
    const footPrintVal = 0.0002532;
    setConsumption(Math.ceil(total));
    setCost((perKWH * Math.ceil(total)).toFixed(2));
    setFootPrint((footPrintVal * total).toFixed(4));
  }, [filteredData]);

  const handleFilterClick = ({ value, timeFormat, name }) => {
    setFilterType({ value, timeFormat, name });
    switch (timeFormat) {
      case "day":
        setFilteredData(sortByTime(groupByDay(readings)).slice(-value));
        break;
      case "hour":
        setFilteredData(sortByTime(readings).slice(-value));
        break;
      default:
        setFilteredData(sortByTime(groupByDay(readings)));
        break;
    }
  };

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>
      <section className="mb3">
        {chartFilterOptions.map((n, i) => {
          return (
            <button
              test-id='filterType-btn'
              key={i}
              onClick={() => handleFilterClick(n)}
              className={`
                  h5
                  inline-block
                  shadow-2
                  pl2
                  pr2
                  pt1
                  pb1
                  roundedMore
                  border-grey
                  black
                  bold mr1

                  ${filterType.name === n.name ? "bg-blue" : "bg-white"}
                `}
            >
              {n.name}
            </button>
          );
        })}
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
      <div>
        <Card cost={cost} consumption={consumption} footPrint={footPrint} filterType={filterType}/>
      </div>
    </>
  );
};
