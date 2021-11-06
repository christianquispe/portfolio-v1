import * as React from "react";

function SvgSpain(props) {
  return (
    <svg
      width={23}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h23v16.429H0V0z" fill="#E92B2B" />
      <path d="M0 5.34h23v5.75H0V5.34z" fill="#FFD02B" />
    </svg>
  );
}

export default SvgSpain;
