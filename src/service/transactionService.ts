import { TransactionType } from '@/types/transaction'

export const getAll = (): TransactionType[] => {
  return [
    {
      id: 1,
      date: '2021-01-01',
      description: 'Test',
      amount: 24.0
    },
    {
      id: 2,
      date: '2021-01-01',
      description: 'Test',
      amount: 60.0
    }
  ]
}
