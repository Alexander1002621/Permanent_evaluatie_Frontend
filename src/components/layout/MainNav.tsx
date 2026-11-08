import {NavLink} from '@mantine/core'
import type {FunctionComponent} from 'react'
import {Link, useLocation} from 'react-router'
import {navItems} from './navItems.ts'

interface MainNavProps {
  onNavigate?: () => void
}

const MainNav: FunctionComponent<MainNavProps> = ({onNavigate}) => {
  const {pathname} = useLocation()

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
        />
      ))}
    </>
  )
}

export default MainNav
