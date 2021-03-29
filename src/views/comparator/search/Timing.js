import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Select from 'components/misc/Select'

const Wrapper = styled.span``
export default function Timing() {
  const { timing, setTiming } = useContext(SearchContext)
  return (
    <Wrapper>
      Quand{' '}
      <Select
        discreet
        value={timing}
        onChange={setTiming}
        options={[
          { value: 'avant', label: `j'allais` },
          { value: 'maintenant', label: `je vais` },
        ]}
      />{' '}
      au travail{' '}
    </Wrapper>
  )
}
