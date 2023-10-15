'use client'

import React from 'react'
import { ToggleButtonProps } from '../../types/Button'

function ToggleButton({ label, toggled = false, onClick }: ToggleButtonProps) {
  const [isToggled, setIsToggled] = React.useState<boolean>(toggled)

  const handleClick = () => {
    setIsToggled(!isToggled)
    onClick(!isToggled)
  }

  return (
    <div className="toggle-button">
      <label htmlFor="ipt-toggle-button">
        <input
          id="ipt-toggle-button"
          type="checkbox"
          defaultChecked={isToggled}
          onClick={handleClick}
        />
        <span />
        <strong>{label}</strong>
      </label>
    </div>
  )
}

export default ToggleButton
