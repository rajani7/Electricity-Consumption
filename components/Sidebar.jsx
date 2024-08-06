import React from "react";
import { deviceSection, summarySection } from "../utils/config";

const DeviceSection = ({ title, usage }) => (
  <div className="shadow-2 roundedMore bg-super-light-grey mb1">
    <p className="darkgray pl2 pt1 pb1">{title}</p>
    <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">{usage}</p>
  </div>
);

const SummarySection = ({ summary, subtitle }) => (
  <>
    <h2 className="h2 greyBlue">{summary}</h2>
    <p className="darkgray mb2">{subtitle}</p>
  </>
);

export const Sidebar = () => (
  <>
        {summarySection.map((n, i) => (
                    <React.Fragment key={i}>
            <SummarySection {...n} />
      </React.Fragment>
    ))}

    <section className="h5 darkgray mb2">
      <h4 className="h4 mb1">Your devices:</h4>
      {deviceSection.map((n, i) => (
      <React.Fragment key={i}>
        <DeviceSection {...n} />
      </React.Fragment>
    ))}
    </section>
  </>
);
