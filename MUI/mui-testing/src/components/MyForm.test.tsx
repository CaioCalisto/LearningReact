// @ts-nocheck
import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { TextField } from '@mui/material'

describe('Testing My Form that uses MUI', () => {
  it('I want to just change a MUI Text box', () => {
    const { getByTestId, getByText } = render(
      <TextField data-testid="myTextField" variant="outlined" />
    )
    var myValue = 'whatever I want as a value'

    var textBox = getByTestId('myTextField').querySelector('input')
    fireEvent.change(textBox, { target: { value: myValue } })

    expect(textBox.value).toBe(myValue)
    expect(getByText(myValue)).not.toBeNull()
  })
})
