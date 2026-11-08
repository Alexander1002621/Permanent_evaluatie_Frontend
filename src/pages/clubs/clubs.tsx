import {Alert, Container, Loader, Text, Title} from '@mantine/core'
import {type FunctionComponent, Suspense, useState} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import ClubFilters from './clubFilters.tsx'
import ClubList from './clubList.tsx'

const Clubs: FunctionComponent = () => {
  const [search, setSearch] = useState<string>('')
  const [league, setLeague] = useState<string | null>(null)

  return (
    <Container>
      <Title order={1}>Clubs</Title>
      <Text mb="md">Bekijk en filter alle clubs</Text>
      <ErrorBoundary fallback={<Alert color="red">De clubs konden niet geladen worden</Alert>}>
        <Suspense fallback={<Loader />}>
          <ClubFilters search={search} setSearch={setSearch} league={league} setLeague={setLeague} />
          <ClubList search={search} league={league} />
        </Suspense>
      </ErrorBoundary>
    </Container>
  )
}

export default Clubs
