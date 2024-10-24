import React from 'react'

export const decorators = [
  (Story: React.JSX.IntrinsicAttributes) => (
    <>
      <Story />
    </>
  )
]
export const tags = ['autodocs']
