import { Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'

type MyFormProps = {
  myCallback: (myValue: string) => void;
}

function MyForm( {myCallback} : MyFormProps) {
  const [value, setValue] = useState('default');
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  
  function act(){
    myCallback(value)
  }

  return (
    <>
      <TextField value={value} onChange={onChange} data-testid="myTextField" variant="outlined" />
      <Button data-testid='myButton' onClick={act}>Click here</Button>
    </>
  )
}

export default MyForm