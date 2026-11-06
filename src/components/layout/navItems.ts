export interface NavItem {
  label: string
  to: string
}

// Eén lijst met alle menu-items, zodat de navigatie op één plek aangepast kan worden.
export const navItems: NavItem[] = [
  {label: 'Home', to: '/'},
  {label: 'Clubs', to: '/clubs'},
  {label: 'Favorieten', to: '/favorieten'},
]
