import React from "react";
import { Link } from "react-router-dom";
//! Components
import BarsIcon from "../Icons/BarsIcon";
//! hookStore
import { useStore } from "../../store";

const Sidebar = ({ navItems }) => {
  const { state, contextActions } = useStore();
  const { navDashboard } = contextActions;

  //! destructure AppContextState
  const { isNavDashboardActive } = state;

  function handleClickExpand(e) {
    if (isNavDashboardActive) {
      navDashboard.open();
    } else {
      navDashboard.collapse();
    }
  }

  const renderNavItems = navItems.map((navItem) => {
    return (
      <li className="sidebar-item" id="sidebar-create-topic">
        <Link to={`${navItem.key}`}>
          {navItem.icon}
          <strong>{navItem.title}</strong>
        </Link>
      </li>
    );
  });

  return (
    <nav id="sidebar" className={`${isNavDashboardActive ? "active" : ""}`}>
      <div className="sidebar-header">
        <span
          className="btn-expand"
          id="btn-expand"
          onClick={handleClickExpand}
        >
          <BarsIcon size={"30px"} active={isNavDashboardActive} />
        </span>
        <h3>Book Store</h3>
      </div>
      <ul className="sidebar-list-item" id="sidebar-list">
        {renderNavItems}
      </ul>
    </nav>
  );
};

export default Sidebar;
