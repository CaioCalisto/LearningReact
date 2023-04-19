import { useParams } from "react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHero.data"

export const RQSuperHero = () => {
  // param heroId vem do Router definido no App.tsx
  const {heroId} = useParams();

  const {isLoading, data, isError, error} = useSuperHeroData(heroId)
  
  if (isLoading){
    return <h2>Loading...</h2>
  }

  if (isError){
    return <h2>Error...</h2>
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  )
}