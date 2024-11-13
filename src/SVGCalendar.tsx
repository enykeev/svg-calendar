import * as React from "react";
import * as dfn from "date-fns";

function SVGCalendar({
  date,
  boxMargin = 5,
  boxWidth = 25,
  boxHeight = boxWidth,
  textXAdj = 0,
  textYAdj = 0,
  fontSize = 12,
  boxStrokeWidth = 1,
}: {
  date: Date;
  boxMargin?: number;
  boxWidth?: number;
  boxHeight?: number;
  textXAdj?: number;
  textYAdj?: number;
  fontSize?: number;
  boxStrokeWidth?: number;
}) {
  const boxes: React.ReactNode[] = [];

  const firstOfMonth = dfn.startOfMonth(date);
  const fomWeekday = dfn.getISODay(firstOfMonth);
  const monthLength = dfn.getDaysInMonth(firstOfMonth);

  for (let i = 0; i < 7 * 5; i++) {
    const y = Math.floor(i / 7);
    const x = i % 7;
    const tx = x * (boxWidth + boxMargin);
    const ty = y * (boxHeight + boxMargin);
    const dayOfMonth = i + 2 - fomWeekday;
    const date = dfn.setDate(firstOfMonth, dayOfMonth);
    if (dayOfMonth > 0 && dayOfMonth <= monthLength) {
      boxes.push(
        <g transform={`translate(${tx} ${ty})`} key={i}>
          <rect
            width={boxWidth}
            height={boxHeight}
            fill="none"
            stroke="black"
            strokeWidth={boxStrokeWidth}
          />
        </g>
      );
    }
  }

  return (
    <svg viewBox="0 0 300 180">
      <g transform="translate(20 30)">
        <g
          transform={`translate(${boxWidth * 4} ${-boxMargin * 2})`}
          textAnchor="middle"
        >
          <text>{dfn.format(date, "MMMM")}</text>
        </g>
        {boxes}
      </g>
    </svg>
  );
}
export default SVGCalendar;
