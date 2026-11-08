import {Button, Container, Text, Title} from '@mantine/core'
import type {FunctionComponent} from 'react'
import {Link} from 'react-router'

const PageNotFound: FunctionComponent = () => {
  return (
    <Container>
      <Title order={1}>Pagina niet gevonden</Title>
      <Text mb="md">Deze pagina bestaat niet.</Text>
      <Button component={Link} to="/">
        Terug naar home
      </Button>
    </Container>
  )
}

export default PageNotFound
