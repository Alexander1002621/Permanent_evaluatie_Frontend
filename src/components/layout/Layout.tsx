import {Anchor, AppShell, Burger, Group, Title} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import type {FunctionComponent} from 'react'
import {Link, Outlet} from 'react-router'
import MainNav from './MainNav.tsx'

const Layout: FunctionComponent = () => {
  const [opened, {toggle, close}] = useDisclosure(false)

  return (
    <AppShell header={{height: 60}} navbar={{width: 220, breakpoint: 'sm', collapsed: {mobile: !opened}}} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Menu openen" />
          <Anchor component={Link} to="/" c="inherit" underline="never">
            <Title order={3}>Voetbalclubs</Title>
          </Anchor>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="sm">
        <MainNav onNavigate={close} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout
