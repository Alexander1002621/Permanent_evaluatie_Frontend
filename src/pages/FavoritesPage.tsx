import {Container, Text, Title} from '@mantine/core'
import type {FunctionComponent} from 'react'

const FavoritesPage: FunctionComponent = () => {
  return (
    <Container>
      <Title order={1}>Favorieten</Title>
      <Text>Jouw favoriete clubs.</Text>
    </Container>
  )
}

export default FavoritesPage
