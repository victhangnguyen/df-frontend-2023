import React from 'react'
import { IconType } from '../../types'

function SettingIcon({
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
    >
      <g id="icon__setting">
        <path
          className="cls-1"
          d="m49.81,28.05c.13-1,.19-2.02.19-3.05s-.06-2.05-.19-3.05c-2.04-.35-4.12-.65-6.23-.9-.48-2.31-1.39-4.47-2.65-6.39,1.32-1.67,2.57-3.35,3.77-5.03-1.26-1.62-2.71-3.07-4.33-4.33-1.68,1.19-3.36,2.45-5.03,3.77-1.92-1.26-4.08-2.17-6.39-2.65-.25-2.12-.55-4.2-.9-6.23-1-.13-2.02-.19-3.05-.19s-2.05.06-3.05.19c-.35,2.04-.65,4.12-.9,6.23-2.31.48-4.46,1.39-6.38,2.64-1.67-1.32-3.35-2.57-5.03-3.77-1.63,1.26-3.09,2.72-4.35,4.35,1.2,1.68,2.45,3.36,3.77,5.03-1.25,1.91-2.16,4.07-2.64,6.37-2.11.25-4.19.54-6.22.89-.14,1.01-.2,2.03-.2,3.07s.06,2.06.2,3.07c2.03.34,4.11.64,6.22.89.48,2.3,1.39,4.46,2.64,6.37-1.32,1.67-2.57,3.35-3.77,5.03,1.26,1.63,2.72,3.09,4.35,4.35,1.68-1.2,3.36-2.45,5.03-3.77,1.91,1.25,4.07,2.16,6.37,2.64.25,2.11.54,4.19.89,6.22,1.01.14,2.03.2,3.07.2s2.06-.06,3.07-.2c.34-2.03.64-4.11.89-6.22,2.31-.49,4.46-1.4,6.38-2.65,1.67,1.32,3.35,2.57,5.03,3.77,1.62-1.26,3.07-2.71,4.33-4.33-1.19-1.68-2.45-3.36-3.77-5.03,1.26-1.92,2.17-4.08,2.65-6.39,2.12-.25,4.2-.55,6.23-.9Zm-12.65,1.54c-.09.26-.2.51-.31.76-1.3,2.87-3.62,5.19-6.49,6.49-.25.12-.51.23-.77.32-1.43.54-2.98.84-4.59.84s-3.17-.3-4.6-.84c-.25-.1-.5-.2-.75-.31-2.88-1.31-5.19-3.62-6.5-6.5-.11-.25-.22-.5-.31-.76-.54-1.43-.84-2.98-.84-4.59s.3-3.17.84-4.6c.1-.25.2-.5.31-.75,1.31-2.88,3.62-5.19,6.5-6.5.25-.11.5-.22.76-.31,1.43-.54,2.98-.84,4.59-.84s3.16.3,4.59.84c.26.09.51.2.76.31,2.87,1.3,5.19,3.62,6.49,6.49.12.25.23.51.32.77.54,1.43.84,2.98.84,4.59s-.3,3.16-.84,4.59Z"
        />
      </g>
    </svg>
  )
}

export default SettingIcon
