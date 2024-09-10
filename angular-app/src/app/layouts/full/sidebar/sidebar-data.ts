import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'App Manager',
  },

  {
    displayName: 'Product',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Order line',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Commands',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Category',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Connect',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  

];
