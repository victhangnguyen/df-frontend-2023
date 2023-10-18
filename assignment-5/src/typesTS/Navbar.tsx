export interface NavItem {
  key: string
  icon: React.JSX.Element
  title: string
}

export interface SidebarProps {
  navItems: Array<NavItem>
}
