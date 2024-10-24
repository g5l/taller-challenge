'use client'

import TransactionList from '@/components/TransactionList'
import { getAll } from '@/service/transactionService'
import { TransactionType } from '@/types/transaction'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export default function Home() {
  const [list, setList] = useState<TransactionType[]>([])

  useEffect(() => {
    const list = getAll()
    setList(list)
  }, [])

  return (
    <div className={styles.container}>
      <TransactionList list={list} />
    </div>
  )
}
