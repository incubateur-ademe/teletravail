import React from 'react'
import styled from 'styled-components'

import Search from './comparator/Search'
import Results from './comparator/Results'
import Details from './comparator/Details'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`

export default function Comparator() {
  return (
    <Wrapper>
      <Search />
      <Details />
      <Results />
    </Wrapper>
  )
}
