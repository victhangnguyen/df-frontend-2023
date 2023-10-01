import { useState } from 'react';

function ToggleButton({ label, toggled, onClick }) {
  const [isToggled, toggle] = useState(toggled);

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
