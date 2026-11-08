import {Table} from '@mantine/core'
import type {FunctionComponent} from 'react'
import type {Club} from '../../models/club.ts'

interface CompareTableProps {
  clubs: Club[]
}

const CompareTable: FunctionComponent<CompareTableProps> = ({clubs}) => {
  return (
    <Table striped withTableBorder>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Club</Table.Th>
          <Table.Th>Land</Table.Th>
          <Table.Th>Competitie</Table.Th>
          <Table.Th>Stadion</Table.Th>
          <Table.Th>Opgericht</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {clubs.map(club => (
          <Table.Tr key={club.id}>
            <Table.Td>{club.name}</Table.Td>
            <Table.Td>{club.country}</Table.Td>
            <Table.Td>{club.league}</Table.Td>
            <Table.Td>{club.stadium}</Table.Td>
            <Table.Td>{club.founded}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}

export default CompareTable
