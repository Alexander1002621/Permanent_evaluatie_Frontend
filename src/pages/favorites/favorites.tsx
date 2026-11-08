import {Alert, Container, Loader, Text, Title} from '@mantine/core'
import {type FunctionComponent, Suspense} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import FavoriteTabs from './favoriteTabs.tsx'

const Favorites: FunctionComponent = () => {
  return (
    <Container>
      <Title order={1}>Favorieten</Title>
      <Text mb="md">Jouw favoriete clubs</Text>
      <ErrorBoundary fallback={<Alert color="red">De clubs konden niet geladen worden</Alert>}>
        <Suspense fallback={<Loader />}>
          <FavoriteTabs />
        </Suspense>
      </ErrorBoundary>
    </Container>
  )
}

export default Favorites
