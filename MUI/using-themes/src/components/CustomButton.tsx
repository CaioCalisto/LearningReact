import { Button, styled } from '@mui/material'
import React from 'react'

export const CustomButton = styled(Button)(( { theme } ) => ({
  backgroundColor: theme.buttons.backgroundColor,
  color: theme.buttons.color
}))