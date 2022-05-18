import React from "react";
import Aura from "./Aura";

const w = 200;
const h = 200;
const cw = w / 2;
const ch = h / 2;

export default function Main() {

  return (
    <>
      {/*     <Chart />
       */}
      <svg width={w} height={h}>


        <g transform={`translate(${cw},${ch})`}>
          <Aura radius={w / 2} />
        </g>
      </svg>
    </>
  );
}
