import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Select from 'components/misc/Select'

const Wrapper = styled.span``
export default function Days() {
  const { timing, days, setDays } = useContext(SearchContext)
  return (
    <Wrapper>
      {timing === 'avant' ? `J'allais` : 'Je vais'} au travail{' '}
      <Select
        value={days}
        onChange={setDays}
        suffix={`jour${days > 1 ? 's' : ''}`}
        options={[
          { value: 1, label: 1 },
          { value: 2, label: 2 },
          { value: 3, label: 3 },
          { value: 4, label: 4 },
          { value: 5, label: 5 },
          { value: 6, label: 6 },
          { value: 7, label: 7 },
        ]}
      />{' '}
      par semaine
    </Wrapper>
  )
}
