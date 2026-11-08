import {SimpleGrid} from '@mantine/core'
import {type FunctionComponent, useContext} from 'react'
import {useGetClubs} from '../../api/clubs.ts'
import {FavoritesContext} from '../../context/favoritesContext.tsx'
import StatCard from './statCard.tsx'

const HomeStats: FunctionComponent = () => {
  const {data: clubs} = useGetClubs()
  const {favorites} = useContext(FavoritesContext)

  const leagues = new Set(clubs.map(club => club.league))
  const countries = new Set(clubs.map(club => club.country))

  return (
    <SimpleGrid cols={{base: 2, sm: 4}}>
      <StatCard label="Clubs" value={clubs.length} />
      <StatCard label="Competities" value={leagues.size} />
      <StatCard label="Landen" value={countries.size} />
      <StatCard label="Favorieten" value={favorites.length} />
    </SimpleGrid>
  )
}

export default HomeStats
