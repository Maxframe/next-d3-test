import React from "react";

export default function Aura({ radius }) {
  let beginOffset = 0;
  let endOffset = 1;

  let val1 = 0.1
  let val2 = 0.7

  return (
    <>
      <defs>
        <radialGradient id="auraGradient">
          <stop offset={`${beginOffset*100}%`} stopColor={`hsla(${val1 * 360}, 100%, 50%, 1.0)`}/>
          <stop offset={`${endOffset*100}%`} stopColor={`hsla(${val2 * 360}, 100%, 50%, 1.0)`} />
        </radialGradient>
      </defs>
      <circle fill="url(#auraGradient)" r={radius / 3} />
    </>
  );
}
