import React from "react";

export default function BackgroundCircle({ radius }) {
  let beginOffset = 0;

  return (
    <>
      <defs>
        <radialGradient id="RadialGradientAura">
          <stop
            offset={`${beginOffset}%`}
            stopColor="hsla(50, 100%, 50%, 1.0)"
          />
          <stop offset="50%" stopColor="hsla(0, 100%, 50%, 1.0)" />
          <stop offset="100%" stopColor="hsla(200, 100%, 50%, 1.0)" />
        </radialGradient>
      </defs>
      <circle
        fill="url(#RadialGradientAura)"
        r={radius}
      />
    </>
  );
}
