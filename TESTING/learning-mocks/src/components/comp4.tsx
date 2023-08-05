import React from 'react'

type comp4Props = {
  param1: string,
  param2: string
}

function comp4({param1, param2}: comp4Props) {
  return (
    <div>comp4</div>
  )
}

export default comp4