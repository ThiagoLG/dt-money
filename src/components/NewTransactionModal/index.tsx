import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { date } from 'zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Overlay>
        <Content>
          <Dialog.Title>New Transaction</Dialog.Title>
          <CloseButton>
            <X />
          </CloseButton>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              {...register('description')}
              type="text"
              placeholder="description"
              required
            />
            <input
              {...register('price', { valueAsNumber: true })}
              type="number"
              placeholder="price"
              required
            />
            <input
              {...register('category')}
              type="text"
              placeholder="category"
              required
            />

            <Controller
              control={control}
              name="type"
              render={(props) => (
                <TransactionType
                  onValueChange={props.field.onChange}
                  value={props.field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransactionTypeButton>
                </TransactionType>
              )}
            />

            <button type="submit" disabled={isSubmitting}>
              Create
            </button>
          </form>
        </Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
