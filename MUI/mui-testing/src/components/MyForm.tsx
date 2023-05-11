import { Button, TextField } from '@mui/material'
import React, { useRef } from 'react'

type MyFormProps = {
  myCallback: (myValue: string) => void;
}

function MyForm( {myCallback} : MyFormProps) {
  const txtBoxValue = useRef<HTMLInputElement>(null);

  function act(){
    myCallback(txtBoxValue.current!.value)
  }

  return (
    <>
      <TextField ref={txtBoxValue} data-testid="myTextField" variant="outlined" />
      <Button data-testid='myButton' onClick={act}>Click here</Button>
    </>
  )
}

export default MyForm