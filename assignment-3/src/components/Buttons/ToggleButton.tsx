import React from 'react';
import { ToggleButtonProps } from '../../types/Button';

function ToggleButton({ label, toggled, onClick }: ToggleButtonProps) {
  const [isToggled, toggle] = React.useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="toggle-button">
      <label htmlFor="ipt-toggle-button">
        <input
          id="ipt-toggle-button"
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
        />
        <span />
        <strong>{label}</strong>
      </label>
    </div>
  );
}

export default ToggleButton;
