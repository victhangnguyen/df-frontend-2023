import React from "react";

function DeleteIcon({ size = 20, color = "#f0f0f0", active = false }) {
  return (
    <svg
      width={size}
      height={size}
      fill="#f0f0f0"

      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <g id="icon__delete">
        <path
          className="cls-1"
          d="m44.77,10.03c-.57-.65-1.4-1.03-2.27-1.03H7.5c-.87,0-1.7.38-2.27,1.03-.57.66-.82,1.53-.7,2.39l5,35c.21,1.48,1.48,2.58,2.97,2.58h25c1.49,0,2.76-1.1,2.97-2.58l5-35c.12-.86-.13-1.73-.7-2.39Zm-25.77,26.97c0-1.66,1.34-3,3-3h6c1.66,0,3,1.34,3,3s-1.34,3-3,3h-6c-1.66,0-3-1.34-3-3Zm9-8h-6c-1.66,0-3-1.34-3-3s1.34-3,3-3h6c1.66,0,3,1.34,3,3s-1.34,3-3,3Z"
        />
        <path
          className="cls-1"
          d="m37,6H13c-1.66,0-3-1.34-3-3s1.34-3,3-3h24c1.66,0,3,1.34,3,3s-1.34,3-3,3Z"
        />
      </g>
    </svg>
  );
}

export default DeleteIcon;
