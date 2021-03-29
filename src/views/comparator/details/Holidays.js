import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Select from 'components/misc/Select'

const Wrapper = styled.span``
export default function Holidays() {
  const { holidays, setHolidays } = useContext(SearchContext)
  return (
    <Wrapper>
      {' '}
      et j'ai{' '}
      <Select
        value={holidays}
        onChange={setHolidays}
        suffix={`semaine${holidays > 1 ? 's' : ''}`}
        options={[
          { value: 1, label: 1 },
          { value: 2, label: 2 },
          { value: 3, label: 3 },
          { value: 4, label: 4 },
          { value: 5, label: 5 },
          { value: 6, label: 6 },
          { value: 7, label: 7 },
          { value: 8, label: 8 },
          { value: 9, label: 9 },
          { value: 10, label: 10 },
          { value: 11, label: 11 },
          { value: 12, label: 12 },
        ]}
      />{' '}
      de congé par an.
    </Wrapper>
  )
}
