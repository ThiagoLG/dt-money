import { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce(
    (acc, curr) => {
      if (curr.type === 'income') acc.income += curr.price
      else if (curr.type === 'outcome') acc.outcome += curr.price
      acc.total += curr.price

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
