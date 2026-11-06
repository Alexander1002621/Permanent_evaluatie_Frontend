import {NavLink} from '@mantine/core'
import type {FunctionComponent} from 'react'
import {Link, useLocation} from 'react-router'
import {navItems} from './navItems.ts'

interface MainNavProps {
  // Wordt opgeroepen na een klik, zodat het mobiele menu kan sluiten.
  onNavigate?: () => void
}

const MainNav: FunctionComponent<MainNavProps> = ({onNavigate}) => {
  // De huidige URL, om te bepalen welk menu-item actief is.
  const {pathname} = useLocation()

  return (
    <>
      {navItems.map(item => (
        // We renderen de Mantine NavLink "als" een React Router Link (component-prop).
        // Zo krijgen we de styling van Mantine én een SPA-link die de pagina niet herlaadt.
        <NavLink
          key={item.to}
          component={Link}
          to={item.to}
          label={item.label}
          active={pathname === item.to}
          onClick={onNavigate}
        />
      ))}
    </>
  )
}

export default MainNav
