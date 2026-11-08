import {Badge, Button, Card, Text, Title} from '@mantine/core'
import {type FunctionComponent, useContext} from 'react'
import {FavoritesContext} from '../context/favoritesContext.tsx'
import type {Club} from '../models/club.ts'

interface ClubCardProps {
  club: Club
}

const ClubCard: FunctionComponent<ClubCardProps> = ({club}) => {
  const {favorites, toggleFavorite} = useContext(FavoritesContext)
  const isFavorite = favorites.includes(club.id)

  return (
    <Card withBorder>
      <Title order={4}>{club.name}</Title>
      <Badge my="xs">{club.league}</Badge>
      <Text size="sm">Land: {club.country}</Text>
      <Text size="sm">Stadion: {club.stadium}</Text>
      <Text size="sm">Opgericht: {club.founded}</Text>
      <Button mt="md" variant={isFavorite ? 'filled' : 'outline'} onClick={() => toggleFavorite(club.id)}>
        {isFavorite ? 'Verwijder uit favorieten' : 'Voeg toe aan favorieten'}
      </Button>
    </Card>
  )
}

export default ClubCard
