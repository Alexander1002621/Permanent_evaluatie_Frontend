import {Badge, NavLink} from '@mantine/core'
import {type FunctionComponent, useContext} from 'react'
import {Link, useLocation} from 'react-router'
import {FavoritesContext} from '../context/favoritesContext.tsx'
import {navItems} from './navItems.ts'

interface NavbarProps {
  onNavigate: () => void
}

const Navbar: FunctionComponent<NavbarProps> = ({onNavigate}) => {
  const {pathname} = useLocation()
  const {favorites} = useContext(FavoritesContext)

  return (
    <>
      {navItems.map(item => (
        <NavLink
          key={item.to}
          component={Link}
          to={item.to}
          label={item.label}
          active={pathname === item.to}
          onClick={onNavigate}
          rightSection={item.to === '/favorieten' && <Badge>{favorites.length}</Badge>}
        />
      ))}
    </>
  )
}

export default Navbar
