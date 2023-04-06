interface ShowNumberProps{
  n : number
}

export function ShowNumber(props: ShowNumberProps){
  return (
    <h1>Here I am inside a Component showing the value: {props.n}</h1>
  )
}