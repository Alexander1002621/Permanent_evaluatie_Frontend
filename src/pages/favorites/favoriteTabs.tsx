import {Button, Group, SimpleGrid, Text} from '@mantine/core'
import {type FunctionComponent, useContext, useState} from 'react'
import {Link} from 'react-router'
import {useGetClubs} from '../../api/clubs.ts'
import ClubCard from '../../components/clubCard.tsx'
import {FavoritesContext} from '../../context/favoritesContext.tsx'
import CompareTable from './compareTable.tsx'

type Tab = 'overzicht' | 'vergelijken'

const FavoriteTabs: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overzicht')
  const {data: clubs} = useGetClubs()
  const {favorites} = useContext(FavoritesContext)

  const favoriteClubs = clubs.filter(club => favorites.includes(club.id))

  if (favoriteClubs.length === 0) {
    return (
      <>
        <Text mb="md">Je hebt nog geen favoriete clubs</Text>
        <Button component={Link} to="/clubs">
          Naar de clubs
        </Button>
      </>
    )
  }

  return (
    <>
      <Group mb="md">
        <Button variant={activeTab === 'overzicht' ? 'filled' : 'default'} onClick={() => setActiveTab('overzicht')}>
          Overzicht
        </Button>
        <Button
          variant={activeTab === 'vergelijken' ? 'filled' : 'default'}
          onClick={() => setActiveTab('vergelijken')}
        >
          Vergelijken
        </Button>
      </Group>

      {activeTab === 'overzicht' && (
        <SimpleGrid cols={{base: 1, sm: 2, md: 3}}>
          {favoriteClubs.map(club => (
            <ClubCard key={club.id} club={club} />
          ))}
        </SimpleGrid>
      )}

      {activeTab === 'vergelijken' && <CompareTable clubs={favoriteClubs} />}
    </>
  )
}

export default FavoriteTabs
