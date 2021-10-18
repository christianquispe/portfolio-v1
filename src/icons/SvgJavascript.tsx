import * as React from "react";

function SvgJavascript(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style={{ height: "1em", width: "1em" }} {...props}>
      <path d="M45.274 2.325A1.001 1.001 0 0044.536 2H5.464a1.001 1.001 0 00-.996 1.089l3.52 39.427c.037.412.324.759.722.873l16.01 4.573a1.018 1.018 0 00.548 0l16.024-4.573c.398-.114.685-.461.722-.873l3.518-39.427a1.002 1.002 0 00-.258-.764zM12 29.004l7 1.942V11h4v26l-11-3.051v-4.945zM38.054 22L37 34.25 27 37v-4.601l6.75-1.855.25-3.75L27 28V11h12l-.345 4H31v8l7.054-1z" />
    </svg>
  );
}

export default SvgJavascript;
