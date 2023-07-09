import * as React from 'react'
import { Header } from '../../components/Header/index'
import { Summary } from '../../components/Summary/index'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Site development</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Sell</td>
              <td>07/08/2022</td>
            </tr>

            <tr>
              <td width="50%">Dinner</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 90,00</PriceHighlight>
              </td>
              <td>Sell</td>
              <td>07/08/2022</td>
            </tr>

            <tr>
              <td width="50%">Site development</td>
              <td>R$ 12.000,00</td>
              <td>Sell</td>
              <td>07/08/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
