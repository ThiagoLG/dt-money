import * as React from 'react'
import { useContext } from 'react'
import { Header } from '../../components/Header/index'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary/index'
import { TransactionContext } from '../../contexts/TransactionsContext'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const { transactions } = useContext(TransactionContext)
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
  })
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions &&
              transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === 'outcome' ? '- ' : ''}
                        {formatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {new Date(transaction.createdAt).toLocaleDateString(
                        'pt-BR',
                      )}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
