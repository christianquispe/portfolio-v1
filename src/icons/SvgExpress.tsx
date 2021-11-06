import * as React from "react";

function SvgExpress(props) {
  return (
    <svg
      width={17}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.823 13.074c-.605.154-.98.007-1.316-.498-.754-1.13-1.587-2.209-2.39-3.307-.104-.142-.212-.282-.346-.458-.95 1.283-1.9 2.505-2.791 3.776-.32.454-.654.652-1.249.491l3.575-4.798-3.328-4.334c.573-.112.968-.055 1.319.458.774 1.132 1.628 2.209 2.48 3.348.856-1.135 1.7-2.214 2.496-3.335.32-.454.665-.627 1.24-.46-.436.579-.862 1.147-1.291 1.711-.58.761-1.148 1.532-1.748 2.277-.214.265-.18.438.012.69 1.11 1.459 2.207 2.933 3.337 4.44zM.177 8.2c.095-.48.159-.968.292-1.439.797-2.846 4.064-4.03 6.308-2.265C8.092 5.53 8.42 6.989 8.354 8.633H.943c-.112 2.95 2.012 4.73 4.719 3.822.95-.319 1.509-1.062 1.789-1.992.142-.466.377-.54.815-.406-.224 1.163-.733 2.135-1.795 2.743-1.594.912-3.87.617-5.066-.649-.706-.744-1.007-1.67-1.14-2.67-.02-.159-.06-.316-.092-.474.002-.269.004-.538.004-.807zm.78-.198h6.697C7.61 5.869 6.282 4.354 4.466 4.34 2.474 4.324 1.043 5.804.957 8.002z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgExpress;