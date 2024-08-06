import React from "react";

const Card = ({ cost, consumption, footPrint, filterType }) => {
  const displayConsumption = 0.3093 * 5 * (filterType.timeFormat === "day"
  ? filterType.value
  : filterType.timeFormat === null
  ? 50
  : 1)
  const displayCost = (0.2816 *  displayConsumption).toFixed(2)
  return (
    <div class="sm-flex">
      <div className="m1 py1 px2 bg-white">
        <div className="h5 bold darkgray">Consumption</div>
        <div className="h3 darkgray">{consumption}</div>
        <div className="h5 darkgray">kWH</div>
      </div>
      <div className="m1 py1 px2 bg-white">
        <div className="h5 bold darkgray">Cost</div>
        <div className="h3 darkgray">{cost}</div>
        <div className="h5 darkgray">Eur</div>
      </div>
      <div className="m1 py1 px2 bg-white">
       <div className="h5 bold darkgray" test-id="footPrint">Footprint</div>
        <div className="h3 darkgray">{footPrint}</div>
        <div className="h5 darkgray">tonnes</div>
      </div>
      <div className="m1 py1 px2 bg-white">
        <div>Air conditioner (5h)</div>
        <div className="">
          Consumption: <span test-id="displayConsumption">{displayConsumption}</span>
          <br />
          Cost: {displayCost}
        </div>
      </div>
    </div>
  );
};

export default Card;
