import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import Days from './details/Days'
import Holidays from './details/Holidays'
import Adjustment from './details/Adjustment'

const Wrapper = styled.p`
  align-self: flex-start;
  width: 31.25rem;
  max-height: ${(props) => (props.visible ? '10em' : '0')};
  margin: -2rem 0 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.7;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: max-height 600ms ease-in-out, opacity 1000ms 600ms;

  ${(props) => props.theme.mq.small} {
    width: 100%;
    font-size: 1rem;
  }
`
export default function Details() {
  const { details } = useContext(UXContext)
  return (
    <Wrapper visible={details}>
      <Days />
      <Holidays />
      <Adjustment />
    </Wrapper>
  )
}
