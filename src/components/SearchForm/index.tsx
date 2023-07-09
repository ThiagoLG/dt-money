import { MagnifyingGlass } from 'phosphor-react'
import * as React from 'react'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for transactions" />

      <button>
        Search <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}
