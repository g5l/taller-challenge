import { TransactionType } from '@/types/transaction'
import style from './styles.module.css'

interface Props {
  list: TransactionType[]
}

const TransactionList = ({ list }: Props) => {
  if (list.length === 0) return 'Transactions are empty'

  return list.map((item) => (
    <ul key={item.id} className={style.listContent}>
      <li>{item.id}</li>
      <li>{item.date}</li>
      <li>{item.description}</li>
      <li>${item.amount}</li>
    </ul>
  ))
}

export default TransactionList
