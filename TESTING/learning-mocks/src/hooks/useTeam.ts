interface Team {
  name: string
}

export function useTeam(id: string): Team {
  return {
    name: 'Some Squad'
  }
}