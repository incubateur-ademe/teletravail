import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Kilometers from 'components/misc/Kilometers'

const Wrapper = styled.span`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1000ms ${(props) => (props.visible ? '300ms' : '0ms')};
`

export default function Time() {
  const { transportation, time, setTime } = useContext(SearchContext)

  return (
    <Wrapper visible={transportation}>
      <br />
      en{' '}
      <Kilometers
        value={time}
        onChange={setTime}
        name='temps'
        label='minutes'
      />
    </Wrapper>
  )
}
