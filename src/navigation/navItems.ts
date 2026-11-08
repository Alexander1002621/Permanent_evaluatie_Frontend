export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  {label: 'Home', to: '/'},
  {label: 'Clubs', to: '/clubs'},
  {label: 'Favorieten', to: '/favorieten'},
]
