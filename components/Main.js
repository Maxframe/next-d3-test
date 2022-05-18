import React from "react";
import { arc } from "d3";
import BackgroundCircle from "./BackgroundCircle";
import Chart from "./Chart";

const w = 200;
const h = 200;
const cw = w / 2;
const ch = h / 2;
const strokeW = 10;

export default function Main() {
  const mouthArc = arc()
    .innerRadius(50)
    .outerRadius(55)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 4);

  return (
    <>
      {/*     <Chart />
       */}
      <svg width={w} height={h}>
        <defs>
          <radialGradient id="RadialGradient1">
            <stop offset="0%" stop-color="red" />
            <stop offset="100%" stop-color="blue" />
          </radialGradient>
        </defs>

        <g transform={`translate(${cw},${ch})`}>
          <BackgroundCircle radius={w / 2 - strokeW / 2} />
          <path d={mouthArc()} />
        <rect

          rx="15"
          ry="15"
          width="100"
          height="100"
          fill="url(#RadialGradient1)"
        />
        </g>
      </svg>
    </>
  );
}
