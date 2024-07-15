export type AsideMenuItem = {
  name: string;
  href: string;
  icon: string;
}

// icons: https://akaricons.com/
export const asideNavigation = [
  {
    name: 'Start Here',
    href: '/',
    icon: 'home-alt1',
  },
  {
    name: 'Campaigns',
    href: '/campaigns',
    icon: 'folder',
  },
  {
    name: 'Chats',
    href: '/chats',
    icon: 'chat-dots',
  },
  {
    name: 'Marketplace',
    href: '/marketplace',
    icon: 'shopping-bag',
  },
  {
    name: 'Brands',
    href: '/brands',
    icon: 'dot-grid-fill',
  },
  {
    name: 'Licenses',
    href: '/licenses',
    icon: 'copy',
  }
]