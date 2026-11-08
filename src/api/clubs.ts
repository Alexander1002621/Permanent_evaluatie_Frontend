import {type UseSuspenseQueryResult, useSuspenseQuery} from '@tanstack/react-query'
import type {Club} from '../models/club.ts'

const getClubs = async (): Promise<Club[]> => {
  const response = await fetch('/clubs.json')
  if (!response.ok) {
    throw new Error('Kon de clubs niet ophalen')
  }
  return (await response.json()) as Club[]
}

export const useGetClubs = (): UseSuspenseQueryResult<Club[], Error> => {
  return useSuspenseQuery({
    queryKey: ['clubs'],
    queryFn: () => getClubs(),
  })
}
