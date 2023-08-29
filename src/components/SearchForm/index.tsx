import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass, Spinner } from 'phosphor-react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search for transactions"
        {...register('query')}
      />

      <button disabled={isSubmitting}>
        {isSubmitting ? (
          <span>
            Searching <Spinner size={20} className="spin" />
          </span>
        ) : (
          <span>
            Search <MagnifyingGlass size={20} />
          </span>
        )}
      </button>
    </SearchFormContainer>
  )
}
