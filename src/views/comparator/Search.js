import React from 'react'
import styled from 'styled-components'

import Timing from './search/Timing'
import Distance from './search/Distance'
import Transportation from './search/Transportation'

const Wrapper = styled.p`
  align-self: flex-start;
  width: 31.25rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.7;

  ${(props) => props.theme.mq.small} {
    width: 100%;
    margin-bottom: 3rem;
    font-size: 1rem;
    text-align: center;
  }
`
export default function Search() {
  return (
    <Wrapper>
      <Timing />
      <Distance />
      <Transportation />
    </Wrapper>
  )
}
