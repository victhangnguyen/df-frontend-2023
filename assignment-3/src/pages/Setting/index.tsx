//! imp Components
import ToggleButton from '../../components/Buttons/ToggleButton';
//! imp Store
import { useStore } from '../../store';

function Setting() {
  const {
    contextActions: { darkMode },
  } = useStore();

  const logState = () => {
    darkMode.toggle();
  };

  return (
    <div className="setting-screen">
      <div className="">
        <ToggleButton label="Dark/Light Mode" toggled onClick={logState} />
      </div>
    </div>
  );
}

export default Setting;
