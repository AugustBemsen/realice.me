import React, { SVGProps } from "react";

const ArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={210}
    height={131}
    viewBox="0 0 210 131"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M201 1C223.667 47 201.9 138.6 3.5 121"
      stroke="#F9F7F5"
      strokeOpacity={0.7}
      strokeWidth={3}
    />
    <path
      d="M9.5 130L3 121L12.5 113.5"
      stroke="#F9F7F5"
      strokeOpacity={0.7}
      strokeWidth={3}
    />
  </svg>
);

export default ArrowSvg;
