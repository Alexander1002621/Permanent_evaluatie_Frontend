import {Alert, Button, Container, Group, Loader, Text, Title} from '@mantine/core'
import {type FunctionComponent, Suspense} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {Link} from 'react-router'
import HomeStats from './homeStats.tsx'

const Home: FunctionComponent = () => {
  return (
    <Container>
      <Title order={1}>Welkom</Title>
      <Text mb="md">Ontdek de bekendste voetbalclubs van Europa</Text>
      <Text mb="lg">
        Op deze site vind je clubs uit verschillende Europese competities. Je kan hierop zoeken op naam, filteren op de
        competitie en je favoriete clubs bijhouden om ze eventueel met elkaar te vergelijken.
      </Text>

      <ErrorBoundary fallback={<Alert color="red">De gegevens konden niet geladen worden</Alert>}>
        <Suspense fallback={<Loader />}>
          <HomeStats />
        </Suspense>
      </ErrorBoundary>

      <Group mt="lg">
        <Button component={Link} to="/clubs">
          Bekijk alle clubs
        </Button>
        <Button component={Link} to="/favorieten" variant="outline">
          Mijn favorieten
        </Button>
      </Group>
    </Container>
  )
}

export default Home
