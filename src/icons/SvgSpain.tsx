import * as React from "react";

function SvgSpain(props) {
  return (
    <svg
      width={512}
      height={512}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M32 96h448v320H32V96z" fill="#E92B2B" />
      <path d="M32 200h448v112H32V200z" fill="#FFD02B" />
    </svg>
  );
}

export default SvgSpain;
