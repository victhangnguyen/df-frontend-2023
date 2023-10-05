import Link from 'next/link'
//! Components
import {
  BarsIcon,
  CreateBookIcon,
  CreateTopicIcon,
  SettingIcon,
} from '../Icons'

const isNavDashboardActive = true
const state = { isLight: true }

function Sidebar() {
  // const handleClickExpand = () => {
  //   if (isNavDashboardActive) {
  //     // navDashboard.open()
  //   } else {
  //     // navDashboard.collapse()
  //   }
  // }

  const navItems = [
    { key: '/', icon: <CreateBookIcon />, title: 'Create Book' },
    {
      key: '/create-topic',
      icon: <CreateTopicIcon />,
      title: 'Create Topic',
    },
    { key: '/setting', icon: <SettingIcon />, title: 'Setting' },
  ]

  const renderNavItems = navItems?.map((navItem) => {
    return (
      <li key={navItem.key} className="sidebar-item" id="sidebar-create-topic">
        <Link href={`${navItem.key}`}>
          {navItem.icon}
          <strong>{navItem.title}</strong>
        </Link>
      </li>
    )
  })

  return (
    <nav
      id="sidebar"
      className={`sidebar ${isNavDashboardActive ? 'active' : ''}`}
    >
      <div
        className={`sidebar-header ${
          state.isLight ? 'color-light' : 'color-dark'
        }`}
      >
        <button
          className="btn-expand"
          id="btn-expand"
          // onClick={() => handleClickExpand()}
        >
          <BarsIcon size="30px" active={isNavDashboardActive} />
        </button>
        <h3>Book Store</h3>
      </div>
      <ul className="sidebar-list-item" id="sidebar-list">
        {renderNavItems}
      </ul>
    </nav>
  )
}

export default Sidebar
