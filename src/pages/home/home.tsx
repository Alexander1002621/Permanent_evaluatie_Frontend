import {Container, Text, Title} from '@mantine/core'
import type {FunctionComponent} from 'react'

const Home: FunctionComponent = () => {
  return (
    <Container>
      <Title order={1}>Welkom</Title>
      <Text>Ontdek de bekendste voetbalclubs van Europa</Text>
    </Container>
  )
}

export default Home
