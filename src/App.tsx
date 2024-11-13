import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as dfn from "date-fns";

import SVGCalendar from "./SVGCalendar";

import "./styles.css";

export default function App() {
  const props = {
    boxMargin: 5,
    boxWidth: 25,
    boxHeight: 25,
    boxStrokeWidth: 1,
    textXAdj: 0,
    textYAdj: 0,
    fontSize: 12,
  };
  const el = <SVGCalendar date={new Date("2024-10")} {...props} />;
  return (
    <div className="app">
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2024-10")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2024-11")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2024-11")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2024-12")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2024-12")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2025-01")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2025-01")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2025-02")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2025-02")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2025-03")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2025-03")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2025-04")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2025-04")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2025-05")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2025-05")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2025-06")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2025-06")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2025-07")} {...props} />
        </div>
      </div>
      <div className="column">
        <div>
          <SVGCalendar date={new Date("2025-07")} {...props} />
        </div>
        <div>
          <SVGCalendar date={new Date("2025-08")} {...props} />
        </div>
      </div>
    </div>
  );
}
