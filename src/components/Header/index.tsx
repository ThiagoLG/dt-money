import * as React from 'react'
import { HeaderContainer, HeeaderContent, NewTransactionButton } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeeaderContent>
        <img src={logo} alt="header logo" />
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeeaderContent>
    </HeaderContainer>
  )
}
