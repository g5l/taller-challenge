import TransactionList from '@/components/TransactionList'
import { render, screen } from '@testing-library/react'

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
    const listItems = screen.getAllByRole('listitem')

    expect(listItems).toHaveLength(4)
    expect(screen.getByText(list[0].description)).toBeInTheDocument()
    expect(screen.getByText(`$${list[0].amount}`)).toBeInTheDocument()
  })

  it('should render the empty state when there are no transactions', () => {
    render(<TransactionList list={[]} />)
    expect(screen.getByText('Transactions are empty')).toBeInTheDocument()
  })
})
