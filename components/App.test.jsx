import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./App.jsx";
import Card from "./Card.jsx";
import { chartFilterOptions } from "../utils/config.js";

jest.mock("../utils/chart.js");

describe("App", () => {
  it("renders energy dashboard", async () => {
    render(<App />);
    const heading = await screen.findByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Energy consumption");
  });

  //test casefor footprint card
  it("renders Footprint card", () =>{
    const footPrintCard = render(<Card/>);
    expect(footPrintCard.queryByTestId('footPrint')).toBe("Footprint");
  });
   // 50 days
  it("renders card", async () => {
    const containerConsumption = render(<Card cost={1} consumption={2} footPrint={2} filterType={chartFilterOptions[0]} />);
    waitFor(()=> {
      expect(containerConsumption.queryByTestId('displayConsumption')).toBe(77.325)
    })

    const containerCost = render(<Card cost={1} consumption={2} filterType={chartFilterOptions[0]} />);
    waitFor(()=> {
      expect(containerCost.queryByTestId('displayConsumption')).toBe(46.394999999999996)
    })
  });
});
