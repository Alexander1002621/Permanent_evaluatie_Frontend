import {Card, Text} from '@mantine/core'
import type {FunctionComponent} from 'react'

interface StatCardProps {
  label: string
  value: number
}

const StatCard: FunctionComponent<StatCardProps> = ({label, value}) => {
  return (
    <Card withBorder>
      <Text size="xl" fw={700}>
        {value}
      </Text>
      <Text size="sm" c="dimmed">
        {label}
      </Text>
    </Card>
  )
}

export default StatCard
