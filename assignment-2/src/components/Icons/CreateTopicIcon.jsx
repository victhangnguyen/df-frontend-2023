import React from "react";

function CreateTopicIcon({ size = 20, color = "#000000", active = false }) {
  return (
    <svg
      width={size}
      height={size}
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <g id="icon__createTopic">
        <path
          className="cls-1"
          d="m42.69,7h-19.89l-7-4H7.31C3.28,3,0,6.28,0,10.31v30.26c0,3.54,2.88,6.43,6.43,6.43h37.15c3.54,0,6.43-2.88,6.43-6.43V14.31c0-4.03-3.28-7.31-7.31-7.31ZM7.31,9h6.89l7,4h21.49c.72,0,1.31.59,1.31,1.31v2.71c-.14,0-.28-.02-.43-.02H6.43c-.14,0-.28.01-.43.02v-6.71c0-.72.59-1.31,1.31-1.31Zm0,32c-.72,0-1.31-.59-1.31-1.31v-16.26c0-.23.19-.43.43-.43h37.15c.23,0,.43.19.43.43v16.26c0,.72-.59,1.31-1.31,1.31H7.31Z"
        />
      </g>
    </svg>
  );
}

export default CreateTopicIcon;
