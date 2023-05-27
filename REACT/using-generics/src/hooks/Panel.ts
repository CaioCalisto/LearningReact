import React from 'react'

export type PanelResult<T> =
  | { success: true; value: T }
  | { success: false; error: Error}

export interface ActivePanel {
  someValue: string
}

function Panel(role: string) : PanelResult<ActivePanel>{
  if (role === 'dev'){
    return { success: false, error: new Error('Dev is not allowed')}
  }

  const result = { someValue: 'ABC' } as ActivePanel

  return { success: true, value: result }
}

export default Panel