import React from 'react';
import { useOutlet } from 'react-router-dom';
//! Components
import Sidebar from '../Sidebar';
//! Icons
import CreateBookIcon from '../Icons/CreateBookIcon';
import CreateTopicIcon from '../Icons/CreateTopicIcon';
import SettingIcon from '../Icons/SettingIcon';
//! types
import { NavItem } from '../../types';

function DashboardScreen() {
  const outlet = useOutlet();
  //! user or admin
  const navItems: Array<NavItem> = [
    { key: '/', icon: <CreateBookIcon size="30px" />, title: 'Create Book' },
    {
      key: '/create-topic',
      icon: <CreateTopicIcon size="30px" />,
      title: 'Create Topic',
    },
    { key: '/setting', icon: <SettingIcon size="30px" />, title: 'Setting' },
  ];

  return (
    <div className="container--content">
      <Sidebar navItems={navItems} />
      <div className="container--fluid container-app">{outlet}</div>
    </div>
  );
}

export default DashboardScreen;
