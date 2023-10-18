import React from 'react'
import { IconType } from '../../typesTS'

function BarsIcon({
  size = '20px',
  color = '#000000',
  colorActive = '#000000',
  active = false,
}: IconType) {
  return (
    <svg
      width={size}
      height={size}
      color={active ? colorActive : color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="white"
    >
      {!active ? (
        <g id="icon_view">
          <circle className="cls-1" cx="25" cy="14" r="3" />
          <rect
            className="cls-1"
            x="22"
            y="20"
            width="6"
            height="20"
            rx="3"
            ry="3"
          />
          <path
            className="cls-1"
            d="m39,50H11c-4.41,0-8-3.59-8-8V8C3,3.59,6.59,0,11,0h28c4.41,0,8,3.59,8,8v34c0,4.41-3.59,8-8,8ZM11,6c-1.1,0-2,.9-2,2v34c0,1.1.9,2,2,2h28c1.1,0,2-.9,2-2V8c0-1.1-.9-2-2-2H11Z"
          />
        </g>
      ) : (
        <g id="icon_view">
          <circle className="cls-1" cx="25" cy="14" r="3" />
          <rect
            className="cls-1"
            x="22"
            y="20"
            width="6"
            height="20"
            rx="3"
            ry="3"
          />
          <path
            className="cls-1"
            d="m39,50H11c-4.41,0-8-3.59-8-8V8C3,3.59,6.59,0,11,0h28c4.41,0,8,3.59,8,8v34c0,4.41-3.59,8-8,8ZM11,6c-1.1,0-2,.9-2,2v34c0,1.1.9,2,2,2h28c1.1,0,2-.9,2-2V8c0-1.1-.9-2-2-2H11Z"
          />
        </g>
      )}
    </svg>
  )
}

export default BarsIcon
