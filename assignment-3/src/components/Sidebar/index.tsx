import React from 'react';
import { Link } from 'react-router-dom';
//! Components
import BarsIcon from '../Icons/BarsIcon';
//! hookStore
import { useStore } from '../../store';
//! types
import { SidebarProps } from '../../types';

function Sidebar({ navItems }: SidebarProps) {
  const {
    state,
    contextActions: { navDashboard },
  } = useStore();

  //! destructure AppContextState
  const { isNavDashboardActive } = state;

  function handleClickExpand() {
    if (isNavDashboardActive) {
      navDashboard.open();
    } else {
      navDashboard.collapse();
    }
  }

  const renderNavItems = navItems?.map((navItem) => {
    return (
      <li key={navItem.key} className="sidebar-item" id="sidebar-create-topic">
        <Link to={`${navItem.key}`}>
          {navItem.icon}
          <strong>{navItem.title}</strong>
        </Link>
      </li>
    );
  });

  return (
    <nav
      id="sidebar"
      className={`sidebar ${state.isLight ? 'color-light' : 'color-dark'} ${
        isNavDashboardActive ? 'active' : ''
      }`}
    >
      <div
        className={`sidebar-header ${
          state.isLight ? 'color-light' : 'color-dark'
        }`}
      >
        <button
          className="btn-expand"
          id="btn-expand"
          onClick={handleClickExpand}
        >
          <BarsIcon size="30px" active={isNavDashboardActive} />
        </button>
        <h3>Book Store</h3>
      </div>
      <ul className="sidebar-list-item" id="sidebar-list">
        {renderNavItems}
      </ul>
    </nav>
  );
}

export default Sidebar;
