import { useRouteError } from 'react-router-dom';

function NotFound() {
  const error = useRouteError();

  return (
    <>
      <h1>Sorry, an unexpected error has occurred.</h1>
      <br />
      <h1>{error.message}</h1>
    </>
  )
}

export default NotFound