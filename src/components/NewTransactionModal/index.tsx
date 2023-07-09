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

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Overlay>
        <Content>
          <Dialog.Title>New Transaction</Dialog.Title>
          <CloseButton>
            <X />
          </CloseButton>
          <form action="">
            <input type="text" placeholder="description" required />
            <input type="text" placeholder="price" required />
            <input type="text" placeholder="category" required />
            <TransactionType>
              <TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={24} />
                Income
              </TransactionTypeButton>
              <TransactionTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown size={24} />
                Outcome
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Create</button>
          </form>
        </Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
