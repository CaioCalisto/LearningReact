type useUserType = {
  username: string,
  email: string,
  someAction : () => void
  anotherAction: (id: string, timestamp: string) => boolean
  asyncAction: () => Promise<boolean>
}

export default function useUser(): useUserType {
  return {
    username: '',
    email: '',
    someAction: () => {},
    anotherAction: (id: string, timestamp: string) => { return true },
    asyncAction: async () => { return true }    
  }
}