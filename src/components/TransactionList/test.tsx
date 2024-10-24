import { render, screen } from '@testing-library/react'

import TransactionList from '.'

describe('<TransactionList />', () => {
  it('should render the list with transactions', () => {
    const list = [
      {
        id: 1,
        date: '2021-01-01',
        description: 'Test',
        amount: 24.0
      }
    ]

    render(<TransactionList list={list} />)

    expect(
      screen.getByRole('listitem', { value: { text: list[0].description } })
    ).toBeInTheDocument()
  })

  // it('should render the empty state when there are no transactions', () => {
  //   render(<TransactionList list={[]} />)
  //   expect('Transactions are empty').toBeInTheDocument()
  // })
})
