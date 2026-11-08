import {SimpleGrid, Text} from '@mantine/core'
import type {FunctionComponent} from 'react'
import {useGetClubs} from '../../api/clubs.ts'
import ClubCard from '../../components/clubCard.tsx'

interface ClubListProps {
  search: string
  league: string | null
}

const ClubList: FunctionComponent<ClubListProps> = ({search, league}) => {
  const {data: clubs} = useGetClubs()

  const filteredClubs = clubs.filter(
    club => club.name.toLowerCase().includes(search.toLowerCase()) && (league === null || club.league === league),
  )

  if (filteredClubs.length === 0) {
    return <Text>Geen clubs gevonden</Text>
  }

  return (
    <SimpleGrid cols={{base: 1, sm: 2, md: 3}}>
      {filteredClubs.map(club => (
        <ClubCard key={club.id} club={club} />
      ))}
    </SimpleGrid>
  )
}

export default ClubList
