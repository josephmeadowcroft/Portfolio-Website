import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bg">
        <Links />
      </div>
      <ToggleButton />
    </div>
  );
};

export default Sidebar;
