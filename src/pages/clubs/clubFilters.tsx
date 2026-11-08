import {Group, Select, TextInput} from '@mantine/core'
import type {FunctionComponent} from 'react'
import {useGetClubs} from '../../api/clubs.ts'

interface ClubFiltersProps {
  search: string
  setSearch: (search: string) => void
  league: string | null
  setLeague: (league: string | null) => void
}

const ClubFilters: FunctionComponent<ClubFiltersProps> = ({search, setSearch, league, setLeague}) => {
  const {data: clubs} = useGetClubs()
  const leagues = [...new Set(clubs.map(club => club.league))]

  return (
    <Group mb="md">
      <TextInput
        label="Zoeken"
        placeholder="Naam van de club"
        value={search}
        onChange={event => setSearch(event.currentTarget.value)}
      />
      <Select
        label="Competitie"
        placeholder="Alle competities"
        data={leagues}
        value={league}
        onChange={setLeague}
        clearable
      />
    </Group>
  )
}

export default ClubFilters
